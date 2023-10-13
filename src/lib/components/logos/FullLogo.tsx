import React from 'react';
import Image from 'next/image';
// @mui
import { Box, SxProps } from '@mui/material';
// hooks
import { useBreackpointTest } from '@/lib/hooks/useBreackpointTest';

// ----------------------------------------------------------------------

interface Props {
  sx?: SxProps;
};

export default function FullLogo({ sx }: Props) {
  const { smUp } = useBreackpointTest();
  return (
    <Box sx={{ ...sx }}>
      <Image
        width={smUp ? 50 : 45}
        height={smUp ? 50 : 45}
        src="/logo.jpeg"
        alt="Logo"
      />
    </Box>
  );
}