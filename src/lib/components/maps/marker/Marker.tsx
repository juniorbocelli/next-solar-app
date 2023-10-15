'use client'
import React from 'react';
// @mui
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// @mui icons
import SolarPowerIcon from '@mui/icons-material/SolarPower';
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
  const { address, zoom } = props;

  const states = useMarkerStates();
  const { receivedData } = states;
  const apis = useMarkerAPIs(states);
  const effects = useMarkerEffects(apis);
  const { useFetchDataWhenSelectAddress } = effects;

  const { selectedAddress, handleSelectedAddressChange } = useAddresses();

  const iconRef = React.useRef<HTMLElement | null>(null);
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

  const handleOpen = () => {
    setAnchor(iconRef.current);
  };
  const handleClose = () => {
    setAnchor(null);
    handleSelectedAddressChange(null);
  };

  const handleClick = () => {
    handleSelectedAddressChange(address);
  };

  const calculate = () => {
    if (receivedData !== null)
      return calculateCapacity(receivedData);

    return null;
  }

  // Effects
  useFetchDataWhenSelectAddress(selectedAddress, address, handleOpen);

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
        open={(selectedAddress === null || selectedAddress.uuid !== address.uuid) ? null : anchor}
        onClose={handleClose}
        arrow={'bottom-center'}
      >
        <Box sx={{ p: 2, maxWidth: 280 }}>
          <Typography variant="subtitle1" gutterBottom>
            {address.description}
          </Typography>

          {
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
            <Button color="primary" variant="soft" size="small" onClick={handleClose}>
              Fechar
            </Button>
          </Box>
        </Box>
      </MenuPopover>

      <Title />

    </Box>
  );
};