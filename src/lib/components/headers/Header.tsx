'use client'

import React from 'react';
// @mui
import {
  Box,
  Typography,
  createTheme
} from '@mui/material';
// components
import { FullLogo } from '../logos';
import { ModeOptionsToogle } from '../settings';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = createTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', pr: 1, alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.background.default,
          py: 1,
          pb: 2,
          height: 80
        }}
      >
        <FullLogo sx={{ mx: 1, mt: 1 }} />
        <Typography variant="h3">
          Next Solar App
        </Typography>
      </Box>

      <ModeOptionsToogle />
    </Box>
  );
};