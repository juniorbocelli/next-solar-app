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

// ----------------------------------------------------------------------

const AddressesContext = createContext({} as IUseAddressesContext);

export const AddressesProvider = ({ children }: { children: React.ReactNode }) => {
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  const handleAddressesChange = useCallback((addresses: IAddress[]) => {
    setAddresses(addresses);
  }, []);

  return (
    <AddressesContext.Provider value={{ addresses, handleAddressesChange }}>
      {children}
    </AddressesContext.Provider>
  );
};

export const useAddresses = () => useContext(AddressesContext);