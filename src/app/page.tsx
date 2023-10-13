// components
import { SimpleMap } from '@/lib/components/maps';
// services
import { getAddresses } from '@/lib/services/getAddresses';
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';

// ----------------------------------------------------------------------

export default async function HomePage() {
  const addresses = await getAddresses();

  return (
    <SimpleMap addresses={addresses} />
  );
}
