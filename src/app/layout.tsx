import type { Metadata } from 'next';
// @mui
import { Container } from '@mui/material';
// components
import ThemeProvider from '@/lib/theme';
import { Header } from '@/lib/components/headers';
import { Drawer } from '@/lib/components/drawer';

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
        <ThemeProvider>
          <Container component="main" maxWidth={false} disableGutters>
            <Header />
            <Drawer />
            {children}

          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
