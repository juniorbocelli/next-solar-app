import React from 'react';
// @types
import { ISolar } from '@/lib/@types/solar';
import { IAddress } from '@/lib/@types/address';

/**
 * STATES
 */
export type ReceivedDataState = ISolar | null;
export type IsQueryingAPIState = boolean;
export type OpenState = boolean;

export interface IUseMarkerStates {
  receivedData: ReceivedDataState;
  handleReceivedDataChange: (receivedData: ReceivedDataState) => void;

  isQueryingAPI: IsQueryingAPIState;
  handleIsQueryingAPIChange: (isQueryingAPI: IsQueryingAPIState) => void;

  open: OpenState;
  handleOpenChange: (open: OpenState) => void;
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
  useFetchDataWhenSelectAddress: (selectedAddres: IAddress | null, addressUuid: string) => void;
};