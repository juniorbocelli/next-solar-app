'use client'
import React from 'react';
// @mui
import { Popover, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// @mui icons
import SolarPowerIcon from '@mui/icons-material/SolarPower';
// components
import Iconify from '../iconify/Iconify';
import MenuPopover from '../popover';
// @types
import { ILatLng } from '@/lib/@types/map';
import { IAddress } from '@/lib/@types/address';

// ----------------------------------------------------------------------

interface MarkerProps extends ILatLng {
  address: IAddress;
  zoom: number;
};

export default function Marker(props: MarkerProps) {
  const { address, zoom } = props;

  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  console.log('zoom', zoom);

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
      <div>
        <Iconify icon="openmoji:solar-energy" sx={{ width: 60, height: 60, }} onClick={handleOpen} />
      </div>

      <MenuPopover open={anchor} onClose={handleClose} arrow={'bottom-center'}>
        <Box sx={{ p: 2, maxWidth: 280 }}>
          <Typography variant="subtitle1" gutterBottom>
            {address.description}
          </Typography>

          <Typography sx={{ fontWeight: 500 }} variant="h6">
            Endereço
          </Typography>

          <Typography
            sx={{
              ml: 5,
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}
            variant="body2"
            color="text.secondary"
          >
            {address.streetName}, {address.streetNumber}
          </Typography>

          <Typography
            sx={{
              ml: 5,
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}
            variant="body2"
            color="text.secondary"
          >
            {address.neighbourhood}
          </Typography>

          <Typography
            sx={{
              ml: 5,
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}
            variant="body2"
            color="text.secondary"
          >
            {address.city}-{address.state}
          </Typography>

          <Typography
            sx={{
              ml: 5,
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}
            variant="body2"
            color="text.secondary"
          >
            CEP: {address.zipcode}
          </Typography>

        </Box>
      </MenuPopover>

      <Title />

    </Box>
  );
};