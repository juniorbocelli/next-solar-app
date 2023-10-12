import type { Metadata } from 'next';
// @mui
import { Container } from '@mui/material';
// components
import { Header } from '@/lib/components/headers';
import { Drawer } from '@/lib/components/drawer';
// providers
import ThemeProvider from '@/lib/theme';
import { AddressesProvider } from '@/lib/contexts/addresses';


export const metadata: Metadata = {
  title: 'Next Solar App',
  description: 'SolarApp Case',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AddressesProvider>
            <Container component="main" maxWidth={false} disableGutters>
              <Header />
              <Drawer />
              {children}

            </Container>
          </AddressesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
