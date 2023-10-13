import { m } from 'framer-motion';
import React from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Paper,
  CardContent,
  CardActionArea,
  Typography,
  Divider,
  useTheme
} from '@mui/material';
// components
import { varHover, varTranHover } from '@/lib/components/animate';
// @types
import { IAddress } from '@/lib/@types/address';

interface AddressCardProps {
  address: IAddress
};

export default function AddressCard(props: AddressCardProps) {
  const { address } = props;
  const theme = useTheme();

  return (
    <Paper
      sx={{
        maxWidth: 350,
        mx: { xs: 0, sm: 1 },
        my: { xs: 1, sm: 0 },
        borderColor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
      variant="outlined"
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