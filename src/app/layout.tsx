// @mui
import { Container } from '@mui/material';
// components
import { Header } from '@/lib/components/headers';
import { SimpleMap } from '@/lib/components/maps';
import { SlideNavigation } from '@/lib/components/navigation/SlideNavigation';
// providers
import ThemeProvider from '@/lib/theme';
import { SettingsProvider } from '@/lib/components/settings';
import { AddressesProvider } from '@/lib/contexts/addresses';
// services
import { getAddresses } from '@/lib/services/getAddresses';

// ----------------------------------------------------------------------

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
