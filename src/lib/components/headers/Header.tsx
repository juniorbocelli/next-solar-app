'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// components
import { FullLogo } from '../logos';
import { ModeOptionsToogle } from '../settings';

// ----------------------------------------------------------------------

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FullLogo sx={{ py: 0.7, mr: 1 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next Solar App
          </Typography>

          <ModeOptionsToogle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};