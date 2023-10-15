'use client'
import React from 'react';
// @mui
import {
  Button,
  Typography,
  Box,
} from '@mui/material';
// components
import Iconify from '../../iconify/Iconify';
import MenuPopover from '../../popover';
// @types
import { ILatLng } from '@/lib/@types/map';
import { IAddress } from '@/lib/@types/address';
import { ISolar } from '@/lib/@types/solar';
// contexts
import { useAddresses } from '@/lib/contexts/addresses';
// hooks
import useMarkerStates from './states';
import useMarkerAPIs from './apis';
import useMarkerEffects from './effects';
//
import { calculateCapacity } from '@/lib/utils/calculateSolar';

// ----------------------------------------------------------------------

interface MarkerProps extends ILatLng {
  address: IAddress;
  zoom: number;
};

export default function Marker(props: MarkerProps) {
  // zoom props control the local name exibition
  const { address, zoom } = props;
  const position = {
    lat: Number(address.latitude),
    lng: Number(address.longitude),
  }

  // ref to icon
  const iconRef = React.useRef<HTMLElement | null>(null);

  // context
  const { selectedAddress, handleSelectedAddressChange } = useAddresses();

  // hooks
  const states = useMarkerStates();
  const {
    isQueryingAPI,
    open,
    receivedData,
    handleOpenChange,
  } = states;

  const apis = useMarkerAPIs(states);

  const effects = useMarkerEffects(apis);
  const { useFetchDataWhenSelectAddress } = effects;
  useFetchDataWhenSelectAddress(selectedAddress, address.uuid);


  const handleClick = () => {
    handleSelectedAddressChange(address);
  };

  const calculate = () => {
    if (receivedData !== null)
      return calculateCapacity(receivedData);

    return null;
  };

  const Title = React.useCallback(() => {
    if (zoom > 14) {
      return (
        <Typography
          sx={{
            minWidth: 250,
            fontWeight: 'bold',
            text: 'red',
            textShadow: `2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
            1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff`
          }}
          border="-moz-initial"
          borderColor="white"
          color="primary.dark"
        >
          {address.description}
        </Typography>
      );
    } else {
      return null;
    }
  }, [zoom, address.description]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box ref={iconRef}>
        <Iconify
          icon="openmoji:solar-energy"
          sx={{ width: 60, height: 60, cursor: 'pointer' }}
          onClick={handleClick}
        />
      </Box>

      <MenuPopover
        open={open}
        anchor={iconRef.current}
        onClose={() => handleOpenChange(false)}
        arrow={'bottom-center'}
      >
        <Box sx={{ p: 2, maxWidth: 280 }}>
          <Typography variant="subtitle1" gutterBottom>
            {address.description}
          </Typography>

          {
            isQueryingAPI ?
              (
                <>
                  <Typography sx={{ mb: 3 }}>
                    Carregando dados...
                  </Typography>
                </>
              )
              :
              (receivedData !== null) ?
                (
                  <>
                    <Typography sx={{ fontWeight: 500, mb: 1 }} variant="h6">
                      Capacidade do Local
                    </Typography>

                    <Typography variant='body2' sx={{ mb: 0.5 }}>
                      Número de painéis: <span style={{ fontWeight: 'bold' }}>{calculate()?.panelsCount}</span>
                    </Typography>

                    <Typography variant='body2' sx={{ mb: 3 }}>
                      Kw economizados/ano: <span style={{ fontWeight: 'bold' }}>{Math.round(calculate()!?.yearlyEnergyDcKwh)}</span>
                    </Typography>
                  </>
                )
                :
                (
                  <>
                    <Typography align="center" sx={{ fontSize: '3rem' }}>
                      🚧
                    </Typography>

                    <Typography align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                      Ainda não temos dados para esse local...
                    </Typography>
                  </>
                )
          }

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="primary" variant="soft" size="small" onClick={() => handleOpenChange(false)}>
              Fechar
            </Button>
          </Box>
        </Box>
      </MenuPopover>

      <Title />

    </Box>
  );
};