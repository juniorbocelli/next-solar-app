import { IAddress } from '@/lib/@types/address';

// ----------------------------------------------------------------------

export async function getAddresses(): Promise<IAddress[]> {
  const response = await fetch('https://challenge.solarpipe.com.br/addresses');
  const addresses = await response.json();

  return addresses || [];
};