import React from 'react';
import {
  IUseMarkerEffects,
  IUseMarkerAPIs
} from './types';
import { IAddress } from '@/lib/@types/address';

export default function useMarkerEffects(apis: IUseMarkerAPIs): IUseMarkerEffects {
  const useFetchDataWhenSelectAddress = (selectedAddress: IAddress | null, address: IAddress, callback: () => void) => {
    React.useEffect(() => {
      if (selectedAddress !== null && selectedAddress.uuid === address.uuid) {
        apis.getSolarInfo(Number(selectedAddress.latitude), Number(selectedAddress.longitude));
        callback();
      };

    }, [selectedAddress, address.uuid]);
  };

  return {
    useFetchDataWhenSelectAddress,
  };
};