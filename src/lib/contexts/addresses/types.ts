'use client'
import { IAddress } from "@/lib/@types/address";
import { ISolar } from "@/lib/@types/solar";

export interface IUseAddressesContext {
  addresses: IAddress[];
  handleAddressesChange: (addresses: IAddress[]) => void;

  selectedAddress: IAddress | null;
  handleSelectedAddressChange: (address: IAddress | null) => void;
};