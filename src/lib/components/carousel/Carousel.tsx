import React from 'react';
// carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from 'react-slick';
// @mui
import { Box, useTheme } from '@mui/material';
// @mui icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// hooks
import { useBreackpointTest } from '@/lib/utils/breackPointTest';

interface CarouselProps {
  items: React.ReactNode[];
};

function ArrowForward(props: CustomArrowProps) {
  const theme = useTheme();

  return (
    <div {...props}>
      <ArrowForwardIosIcon sx={{ color: theme.palette.primary.main, mt: -3, }} />
    </div>
  );
};

function ArrowBack(props: CustomArrowProps) {
  const theme = useTheme();

  return (
    <div {...props}>
      <ArrowBackIosIcon sx={{ color: theme.palette.primary.main, mt: -3, }} />
    </div>
  );
};

export default function Carousel(props: CarouselProps) {
  const { items } = props;
  const { smUp } = useBreackpointTest();

  const settings_md = {
    dots: false,
    arrrows: smUp,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: !smUp,
    verticalSwiping: !smUp,
    nextArrow: smUp ? <ArrowForward /> : undefined,
    prevArrow: smUp ? <ArrowBack /> : undefined,
  };

  return (
    <Box sx={{ mx: 3 }}>
      <Slider {...settings_md}>
        {
          items.map(Item => Item)
        }
      </Slider>
    </Box>
  );
};