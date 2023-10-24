'use client'
// @mui
import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
// components
import ProgressBar from '../progress-bar';
//
import { HEADER_HEIGHT } from '@/config-global';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {
  return (
    <>
      <ProgressBar />

      <StyledRoot
        sx={{
          width: 1,
          height: `calc(100% - ${HEADER_HEIGHT}px)`,
        }}
      >
        <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
      </StyledRoot>
    </>
  );
}
