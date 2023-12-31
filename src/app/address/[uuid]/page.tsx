// components
import { PageErrorDialog } from '@/lib/components/feedback';
import { SimpleMap } from '@/lib/components/maps';
// services
import { getAddresses } from '@/lib/services/getAddresses';
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';
// @types
import { ISolar } from '@/lib/@types/solar';
//
import { recognizeAddress } from '@/lib/utils/recognize-address';

// ----------------------------------------------------------------------

// Cache google api data
export async function generateStaticParams() {
  const addresses = await getAddresses();

  return addresses.map((address) => ({
    uuid: address.uuid
  }));
};

export default async function AddressDetailsPage({
  params,
}: {
  params: { uuid: string }
}
) {
  const { uuid } = params;

  // Data is already in cache
  const addresses = await getAddresses();

  // Verify if uuid is valid
  // This function is executed only in build or when not cached address is selected
  const address = recognizeAddress(addresses, uuid);

  // Show error modal when address is not valid
  if (address === null)
    return (
      <PageErrorDialog
        title="Erro"
        content="O endereço não foi encontrado"
        redirectTo="/"
      />
    );

  const solarInfo: ISolar | null = await getSolarInformationsByAddress(Number(address.latitude), Number(address.longitude));

  return (
    <SimpleMap addresses={addresses} selectedAddress={address} solarInfo={solarInfo} />
  );
}