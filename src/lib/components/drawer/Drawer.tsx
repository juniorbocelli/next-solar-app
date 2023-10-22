'use client';
import * as React from 'react';
// @mui
import { Global } from '@emotion/react';
import { styled, useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// @mui icons
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
// components
import { Carousel } from '../carousel';
import { AddressCard } from '../card';
// hooks
import { useBreackpointTest } from '@/lib/hooks/useBreackpointTest';
// contexts
import { useAddresses } from '@/lib/contexts/addresses';

// ----------------------------------------------------------------------

const drawerBleeding = 56;

interface Props {
  window?: () => Window;
}

// ----------------------------------------------------------------------

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

// ----------------------------------------------------------------------

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

// ----------------------------------------------------------------------

export default function SwipeableEdgeDrawer(props: Props) {
  // context data
  const { addresses, selectedAddress } = useAddresses();
  const theme = useTheme();
  // test scrren size
  const { smUp } = useBreackpointTest();
  const { window } = props;

  // Control drawer state
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  // Effects (initialize opened and close if address is selected)
  React.useEffect(() => {
    if (selectedAddress !== null)
      setOpen(false);
  }, [selectedAddress]);

  // Control the drawer height
  const globalHeight = React.useMemo(() => {
    return open ? smUp ? 'auto' : `calc(90% - ${drawerBleeding}px)` : drawerBleeding;
  }, [smUp, open]);

  return (
    <Root>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: globalHeight,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
            pointerEvents: 'all',
          }}
          onClick={toggleDrawer(!open)}
        >
          {
            open ?
              <KeyboardDoubleArrowDownRoundedIcon
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
                  borderRadius: 3,
                  position: 'absolute',
                  top: 8,
                  left: 'calc(50% - 15px)',
                }}
              />
              :
              <KeyboardDoubleArrowUpRoundedIcon
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
                  borderRadius: 3,
                  position: 'absolute',
                  top: 8,
                  left: 'calc(50% - 15px)',
                }}
              />
          }
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{addresses.length} resuldatos</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >

          <Carousel
            addresses={addresses}
            slidesToShow={5}
          />

        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}