import type { Metadata } from 'next';
// components
import { SimpleMap } from '@/lib/components/maps';
// services
import { getAddresses } from '@/lib/services/getAddresses';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Next Solar App',
  description: 'SolarApp Case',
}

export default async function HomePage() {
  const addresses = await getAddresses();

  return (
    <SimpleMap addresses={addresses} selectedAddress={null} solarInfo={null} />
  );
}
