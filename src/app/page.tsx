// @mui
import { Container } from '@mui/material';
// components
import { Header } from '@/lib/components/headers';
import { SimpleMap } from '@/lib/components/maps';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Container component="main" maxWidth={false} disableGutters>
      <Header />
      <SimpleMap />
    </Container>
  );
}
