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
// components
import { AddressCard } from '../card';
// context
import { useAddresses } from '@/lib/contexts/addresses';
// @types
import { IAddress } from '@/lib/@types/address';

interface CarouselProps {
  addresses: IAddress[];
  slidesToShow: number;
};

function SlickArrowLeft({ currentSlide, slideCount, ...props }: CustomArrowProps) {
  const theme = useTheme();

  return (
    <div
      {...props}
      className={

        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}

      style={{
        fontSize: 0,
        lineHeight: 0,
        position: 'absolute',
        top: '50%',
        left: '-25px',
        display: 'block',
        width: '20px',
        height: '20px',
        padding: '0',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
        color: 'transparent',
        border: 'none',
        outline: 'none',
        background: 'transparent',
      }}
    >
      <ArrowBackIosIcon
        sx={{
          color: currentSlide === 0 ? theme.palette.primary.lighter : theme.palette.primary.main,
          mt: -3,
          fontSize: '3rem'
        }}
      />
    </div >
  );
};

function SlickArrowRight({ currentSlide, slideCount, slidesToShow, ...props }: CustomArrowProps & { slidesToShow: number }) {
  const theme = useTheme();

  return (
    <div
      {...props}
      className={
        (currentSlide === Number(slideCount) + slidesToShow ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === Number(slideCount) + slidesToShow ? true : false}

      style={{
        fontSize: 0,
        lineHeight: 0,
        position: 'absolute',
        top: '50%',
        right: '-10px',
        display: 'block',
        width: '20px',
        height: '20px',
        padding: '0',
        transform: 'translate(0, -50%)',
        cursor: 'pointer',
        color: 'transparent',
        border: 'none',
        outline: 'none',
        background: 'transparent',
      }}
    >
      <ArrowForwardIosIcon
        sx={{
          color: (slideCount === (Number(currentSlide) + slidesToShow)) ? theme.palette.primary.lighter : theme.palette.primary.main,
          mt: -3,
          fontSize: '3rem'
        }}
      />
    </div>
  );
};

export default function Carousel(props: CarouselProps) {
  const { addresses, slidesToShow } = props;
  const { selectedAddress } = useAddresses();
  const slideRef = React.useRef<Slider | null>(null)

  // Effects (goto selected address)
  React.useEffect(() => {
    if (selectedAddress !== null)
      for (let i = 0; i < addresses.length; i++) {
        if (selectedAddress.uuid === addresses[i].uuid)
          slideRef.current?.slickGoTo(i)
      };
  }, [selectedAddress,]);

  // Configuration of carousel
  const settings_md = {
    dots: false,
    arrrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight slidesToShow={slidesToShow} />,
    prevArrow: <SlickArrowLeft />,
  };

  return (
    <Box sx={{ mx: 3 }}>
      <Slider ref={slideRef} {...settings_md}>
        {
          addresses.map(a => <AddressCard key={a.uuid} address={a} />)
        }
      </Slider>
    </Box>
  );
};