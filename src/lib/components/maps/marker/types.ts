import React from 'react';
// @types
import { ISolar } from '@/lib/@types/solar';
import { IAddress } from '@/lib/@types/address';

/**
 * STATES
 */
export type ReceivedDataState = ISolar | null;
export interface IUseMarkerStates {
  receivedData: ReceivedDataState;
  setReceivedData: React.Dispatch<React.SetStateAction<ReceivedDataState>>;
};

/**
 * APIs
 */
export interface IUseMarkerAPIs {
  getSolarInfo: (lat: number, lng: number) => void;
};

/**
 * EFFECTS
 */
export interface IUseMarkerEffects {
  useFetchDataWhenSelectAddress: (selectedAddres: IAddress | null, address: IAddress, callback: () => void) => void;
};