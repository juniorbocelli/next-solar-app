'use client'
import {
  createContext,
  useCallback,
  useContext,
  useState
} from 'react';
// @types
import { IAddress } from '@/lib/@types/address';

// ----------------------------------------------------------------------

const AddressesContext = createContext({});

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