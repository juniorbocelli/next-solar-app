import type { Metadata } from 'next';
// @mui
import { Container } from '@mui/material';
// components
import { ThemeRegistry } from '@/lib/components/theme-registry';
import { Header } from '@/lib/components/headers';
import { SimpleMap } from '@/lib/components/maps';

export const metadata: Metadata = {
  title: 'Next Solar App',
  description: 'SolarApp Case',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Container component="main" maxWidth={false} disableGutters>
            <Header />
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
