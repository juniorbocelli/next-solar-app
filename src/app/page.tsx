// components
import { SimpleMap } from '@/lib/components/maps';
// services
import { getAddresses } from '@/lib/services/getAddresses';

// ----------------------------------------------------------------------

export default async function HomePage() {
  const addresses = await getAddresses();

  return (
    <SimpleMap addresses={addresses} />
  );
}
