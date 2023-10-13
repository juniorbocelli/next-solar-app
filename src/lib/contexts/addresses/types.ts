'use client'
import { IAddress } from "@/lib/@types/address";

export interface IUseAddressesContext {
  addresses: IAddress[];
  handleAddressesChange: (addresses: IAddress[]) => void;

  selectedAddress: string | null;
  handleSelectedAddressChange: (uuid: string) => void;
};