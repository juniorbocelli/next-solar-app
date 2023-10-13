// components
import { SolarInfoDialog } from '@/lib/components/modal-dialog';
// services
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';

// ----------------------------------------------------------------------

export default async function AddressDetailsPage(
  {
    params
  }: {
    params: { slug: string[2] }
  }
) {
  const { slug } = params;
  const solarInfo = await getSolarInformationsByAddress(Number(slug[0]), Number(slug[1]));

  return (
    <SolarInfoDialog isOpen={true} text={String(solarInfo)} />
  );
}