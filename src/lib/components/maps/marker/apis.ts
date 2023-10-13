// @types
import {
  IUseMarkerAPIs,
  IUseMarkerStates
} from './types';
// services
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';

export default function useMarkerAPIs(states: IUseMarkerStates): IUseMarkerAPIs {
  const getSolarInfo = async (lat: number, lng: number) => {
    const data = await getSolarInformationsByAddress(lat, lng);

    states.setReceivedData(data);
  };

  return {
    getSolarInfo,
  }
};