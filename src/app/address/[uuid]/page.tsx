import type { Metadata } from 'next';
// components
import { AlertDialog } from '@/lib/components/modal-dialog';
import { SolarData } from '@/lib/contexts/addresses';
// services
import { getAddresses } from '@/lib/services/getAddresses';
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';
// @types
import { ISolar } from '@/lib/@types/solar';
//
import { recognizeAddress } from '@/lib/utils/recognize-address';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Next Solar App',
  description: 'SolarApp Case',
};

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
  const address = recognizeAddress(addresses, uuid);

  if (address === null)
    throw new Error("O endereço informado não existe!")

  const solarInfo: ISolar | null = await getSolarInformationsByAddress(Number(address.latitude), Number(address.longitude));

  return (
    <SolarData address={address} solarData={solarInfo} />
  );
}