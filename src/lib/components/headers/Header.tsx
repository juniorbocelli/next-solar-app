'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// components
import { FullLogo } from '../logo';
import { ModeOptionsToogle } from '../settings';
// hooks
import { useBreackpointTest } from '@/lib/hooks/useBreackpointTest';

// ----------------------------------------------------------------------

export default function Header() {
  const { smUp } = useBreackpointTest();

  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FullLogo sx={{ py: 1, mr: 1 }} />

          {
            !smUp ? null :
              (
                <Typography
                  variant="h4"
                  component="div"
                >
                  Next Solar App
                </Typography>
              )
          }

          <Box sx={{ flexGrow: 1 }} />

          <ModeOptionsToogle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};