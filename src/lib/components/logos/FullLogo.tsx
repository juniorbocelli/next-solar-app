import React from 'react';
import Image from 'next/image';
// @mui
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props {
  sx?: SxProps;
};

export default function FullLogo({ sx }: Props) {
  return (
    <Box sx={{ ...sx }}>
      <Image
        width={60}
        height={60}
        src="/logo.jpeg"
        alt="Logo"
      />
    </Box>
  );
}