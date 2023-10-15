import React from 'react';
import {
  IUseMarkerEffects,
  IUseMarkerAPIs,
} from './types';
import { IAddress } from '@/lib/@types/address';

export default function useMarkerEffects(apis: IUseMarkerAPIs): IUseMarkerEffects {
  const useFetchDataWhenSelectAddress = (selectedAddress: IAddress | null, addressUuid: string) => {
    const { getSolarInfo } = apis;

    React.useEffect(() => {
      if (selectedAddress !== null && selectedAddress.uuid === addressUuid) {
        getSolarInfo(Number(selectedAddress.latitude), Number(selectedAddress.longitude));
      };

    }, [selectedAddress, addressUuid, getSolarInfo]);
  };

  return {
    useFetchDataWhenSelectAddress,
  };
};