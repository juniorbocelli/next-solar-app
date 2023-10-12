'use client'
import React from 'react';
// @mui
import { Popover, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// @mui icons
import SolarPowerIcon from '@mui/icons-material/SolarPower';
// components
import Iconify from '../iconify/Iconify';
// @types
import { ILatLng } from '@/lib/@types/map';

// ----------------------------------------------------------------------

interface MarkerProps extends ILatLng {
  text: string;
  zoom: number;
};

export default function Marker(props: MarkerProps) {
  const { text, zoom } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <Iconify icon="openmoji:solar-energy" sx={{ width: 60, height: 60 }} />
      <Typography>
        {text}
      </Typography>
    </Box>
  );
};