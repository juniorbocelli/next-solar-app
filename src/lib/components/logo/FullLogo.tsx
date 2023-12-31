'use client'
import React from 'react';
import Image from 'next/image';
// @mui
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props {
  sx?: SxProps;
};

export default function FullLogo({ sx }: Props) {
  const HEIGHT = 60;

  return (
    <Box sx={{ ...sx }}>
      <Image
        height={HEIGHT}
        width={(HEIGHT * 321) / 197}
        src="/logo.png"
        alt="Logo"
      />
    </Box>
  );
}