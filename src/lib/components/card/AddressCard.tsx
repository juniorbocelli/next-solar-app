import { m } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/navigation';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Paper,
  CardActionArea,
  Typography,
  Divider,
  useTheme
} from '@mui/material';
// context
import { useAddresses } from '@/lib/contexts/addresses';
import { useSettingsContext } from '../settings';
// @types
import { IAddress } from '@/lib/@types/address';

interface AddressCardProps {
  address: IAddress
};

export default function AddressCard(props: AddressCardProps) {
  const { address } = props;
  const theme = useTheme();
  // theme context
  const { themeMode } = useSettingsContext();
  const router = useRouter();
  // context data
  const { selectedAddress } = useAddresses();

  const handleCardClick = () => {
    router.push(`/address/${address.uuid}`);
  };

  return (
    <Paper
      sx={{
        maxWidth: 350,
        mx: { xs: 0, sm: 1 },
        my: { xs: 1, sm: 0 },
        // background color depends of theme and if selectedAddress is null or not
        bgColor: (selectedAddress?.uuid === address.uuid) ? (theme) => alpha(theme.palette.grey[500], 1) : (theme) => alpha(theme.palette.grey[500], 0.12),
        backgroundColor: {
          xs: (selectedAddress?.uuid === address.uuid) ?
            (themeMode === 'light' ? alpha(theme.palette.grey[300], 1) : alpha(theme.palette.grey[700], 1)) : undefined,
          md: (selectedAddress?.uuid === address.uuid) ? alpha(theme.palette.grey[500], 0.12) : undefined
        },
      }}
      variant="outlined"

      onClick={handleCardClick}
    >
      <CardActionArea
        component={m.div}
        whileHover="hover"
        sx={{ p: 1.5 }}
      >
        <Typography variant="h5" component={m.image} sx={{ mb: 0.5 }}>
          {address.description}
        </Typography>

        <Divider
          sx={{
            borderTop: `2px solid ${theme.palette.grey[500]}`,
            mb: 2
          }}
        />

        <Typography sx={{ fontWeight: 500 }} variant="h6">
          Endereço
        </Typography>

        <Typography
          sx={{
            ml: 5,
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
          variant="body2"
          color="text.secondary"
        >
          {address.streetName}, {address.streetNumber}
        </Typography>

        <Typography
          sx={{
            ml: 5,
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
          variant="body2"
          color="text.secondary"
        >
          {address.neighbourhood}
        </Typography>

        <Typography
          sx={{
            ml: 5,
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
          variant="body2"
          color="text.secondary"
        >
          {address.city}-{address.state}
        </Typography>

        <Typography
          sx={{
            ml: 5,
            fontSize: '0.9rem',
            fontStyle: 'italic'
          }}
          variant="body2"
          color="text.secondary"
        >
          CEP: {address.zipcode}
        </Typography>
      </CardActionArea>
    </Paper>
  );
};