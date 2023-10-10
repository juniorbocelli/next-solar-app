// @mui
import { Container } from '@mui/material';
// components
import { Header } from '@/lib/components/header';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Container component="main" maxWidth={false} disableGutters>
      <Header />
    </Container>
  );
}
