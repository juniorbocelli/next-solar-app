import { IAddress } from "@/lib/@types/address"

export const recognizeAddress = (addresses: IAddress[], uuid: string): IAddress | null => {
  for (const a of addresses)
    if (a.uuid === uuid)
      return a;

  return null
};