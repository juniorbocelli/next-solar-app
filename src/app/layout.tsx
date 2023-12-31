import type { Metadata } from 'next';
// @mui
import { Container } from '@mui/material';
// components
import { Header } from '@/lib/components/headers';
import { SlideNavigation } from '@/lib/components/navigation/SlideNavigation';
// providers
import ThemeProvider from '@/lib/theme';
import { SettingsProvider } from '@/lib/components/settings';
import { AddressesProvider } from '@/lib/contexts/addresses';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Next Solar App',
  description: 'SolarApp Case',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="pt-BR">
      <body>
        <SettingsProvider>
          <ThemeProvider>
            <AddressesProvider>
              <Container component="main" maxWidth={false} disableGutters>
                <Header />
                <SlideNavigation />

                {children}

              </Container>
            </AddressesProvider>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
