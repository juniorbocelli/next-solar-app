'use client'

import React from 'react';
// @mui
import {
  Box,
  Typography,
  createTheme
} from '@mui/material';
// components
import { FullLogo } from '../logo';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = createTheme();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: theme.palette.grey[100],
          py: 1
        }}
      >
        <FullLogo sx={{ mx: 1, mt: 1 }} />
        <Typography variant="h3">
          Next Solar App
        </Typography>
      </Box>
    </>
  );
};