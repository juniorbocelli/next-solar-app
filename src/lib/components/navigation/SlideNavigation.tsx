'use client'
import React from 'react';
// @mui
import { Box } from '@mui/material';
// components
import { Drawer } from '../drawer';
import { Carousel } from '../carousel';
import { AddressCard } from '../card';
// hooks
import { useBreackpointTest } from '@/lib/hooks/useBreackpointTest';
// context
import { useAddresses } from '@/lib/contexts/addresses';

interface SlideNavigationProps {

};

export function SlideNavigation(props: SlideNavigationProps) {
  const { addresses } = useAddresses();
  // To test if dispositive is mobile or not
  const { smUp } = useBreackpointTest();

  return (
    <div>
      {
        smUp ?
          <Drawer />
          :
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 2000,
              px: 1
            }}
          >
            <Carousel addresses={addresses} slidesToShow={1} />
          </Box>
      }
    </div>
  );
};