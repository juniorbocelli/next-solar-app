'use client'
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
// @mui
import {
  Button,
  Typography,
  Box,
} from '@mui/material';
// components
import Iconify from '../iconify/Iconify';
import { MenuPopover } from '../popover';
// @types
import { ILatLng } from '@/lib/@types/map';
import { IAddress } from '@/lib/@types/address';
import { ISolar } from '@/lib/@types/solar';
// contexts
import { useAddresses } from '@/lib/contexts/addresses';
// hooks
import { useBreackpointTest } from '@/lib/hooks/useBreackpointTest';
//
import { calculateCapacity } from '@/lib/utils/calculateSolar';

// ----------------------------------------------------------------------

interface MarkerProps extends ILatLng {
  address: IAddress;
  selectedAddress: IAddress | null;
  solarInfo: ISolar | null;
  zoom: number;
};

export default function Marker(props: MarkerProps) {
  // zoom props control the local name exibition
  const {
    address,
    selectedAddress,
    solarInfo,
    zoom,
  } = props;
  // router
  const router = useRouter();
  const params = useParams();

  const { handleSelectedAddressChange } = useAddresses();
  const { smUp } = useBreackpointTest();

  // ref to icon
  const iconRef = React.useRef<HTMLElement | null>(null);
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

  // Control popover status
  const handleOpen = () => {
    setAnchor(iconRef.current);
  };
  const handleClose = () => {
    setAnchor(null);
    handleSelectedAddressChange(null);
  };

  // Effects (open popover if selectedAddress is the marker address)
  React.useEffect(() => {
    if (selectedAddress !== null) {
      if (selectedAddress.uuid === address.uuid) {
        handleOpen();
      };

    } else {
      setAnchor(null);
    }
  }, [selectedAddress, address.uuid]);

  // Control clicks in icon marker
  const handleClick = () => {
    if (params.uuid === address.uuid)
      router.refresh();
    else
      router.push(`/address/${address.uuid}`);
  };

  // Calculate de solar capacity
  const calculate = () => {
    if (solarInfo !== null)
      return calculateCapacity(solarInfo);

    return null;
  };

  // Description display depends on zoom
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


  // This component uses Rect.Suspense to control popover position when his open
  const renderLoader = () => <p>Loading</p>;

  return (
    <Box sx={{ display: 'flex' }}>

      <Box ref={iconRef}>
        <Iconify
          icon="openmoji:solar-energy"
          sx={{ width: 60, height: 60, cursor: 'pointer' }}
          onClick={handleClick}
        />
      </Box>


      <React.Suspense fallback={renderLoader()}>
        <MenuPopover
          anchor={anchor}
          onClose={undefined}
          arrow={'bottom-center'}
          onWheel={handleClose}
          autoFocus={false}
        >
          <Box sx={{ p: 2, maxWidth: 280 }}>
            <Typography variant="subtitle1" gutterBottom>
              {address.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: 'italic',
                fontSize: { xs: '0.7rem', md: '0.9rem' },
                lineHeight: '0.9rem'
              }}
            >
              {`${address.streetName}, ${address.streetNumber}`}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontStyle: 'italic', fontSize: { xs: '0.7rem', md: '0.9rem' } }}>
              {`${address.city}-${address.state}`}
            </Typography>
            {
              (solarInfo !== null) ?
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
                {!smUp ? 'Fechar' : 'Selecionar outro local'}
              </Button>
            </Box>
          </Box>
        </MenuPopover>
      </React.Suspense>

      <Typography
        sx={{
          minWidth: 250,
          fontWeight: 'bold',
          textShadow: `2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
            1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff`
        }}
        border="-moz-initial"
        borderColor="white"
        color="primary.dark"
      >
      </Typography>

      <Title />
    </Box>
  );
};