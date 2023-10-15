'use client'
import {
  createContext,
  useCallback,
  useContext,
  useState
} from 'react';
// @types
import { IAddress } from '@/lib/@types/address';
import { IUseAddressesContext } from './types';
import { ISolar } from '@/lib/@types/solar';

// ----------------------------------------------------------------------

const AddressesContext = createContext({} as IUseAddressesContext);

export const AddressesProvider = ({ children }: { children: React.ReactNode }) => {
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
  const [solarInfo, setSolarInfo] = useState<ISolar | null>(null);

  const handleAddressesChange = useCallback((addresses: IAddress[]) => {
    setAddresses(addresses);
  }, []);

  const handleSelectedAddressChange = useCallback((address: IAddress | null) => {
    setSelectedAddress(address);
  }, []);

  const handleSolarInfoChange = useCallback((solarInfo: ISolar | null) => {
    setSolarInfo(solarInfo);
  }, []);

  return (
    <AddressesContext.Provider
      value={{
        addresses,
        handleAddressesChange,

        selectedAddress,
        handleSelectedAddressChange,

        solarInfo,
        handleSolarInfoChange,
      }}>
      {children}
    </AddressesContext.Provider>
  );
};

export const useAddresses = () => useContext(AddressesContext);