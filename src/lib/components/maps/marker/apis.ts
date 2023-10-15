import React from 'react';
// @types
import {
  IUseMarkerAPIs,
  IUseMarkerStates,
} from './types';
// services
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';

export default function useMarkerAPIs(states: IUseMarkerStates): IUseMarkerAPIs {
  const {
    handleOpenChange,
    handleIsQueryingAPIChange,
    handleReceivedDataChange,
  } = states;

  const getSolarInfo = React.useCallback(async (lat: number, lng: number) => {
    handleIsQueryingAPIChange(true);
    handleOpenChange(true);

    getSolarInformationsByAddress(lat, lng)
      .then((data) => {
        if (process.env.NODE_ENV === 'development')
          console.log('getSolarInformationsByAddress', data);

        // has success
        handleReceivedDataChange(data);
      })
      .catch((e) => {
        if (process.env.NODE_ENV === 'development')
          console.log('getSolarInformationsByAddress', e);

        // has error
        handleReceivedDataChange(null);
      })
      .finally(() => {
        handleIsQueryingAPIChange(false);
      });
  }, [handleIsQueryingAPIChange, handleOpenChange, handleReceivedDataChange]);

  return {
    getSolarInfo,
  };
};