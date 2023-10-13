// @types
import {
  IUseMarkerAPIs,
  IUseMarkerStates
} from './types';
// services
import { getSolarInformationsByAddress } from '@/lib/services/getSolarInformationsByAddress';

export default function useMarkerAPIs(states: IUseMarkerStates): IUseMarkerAPIs {
  const getSolarInfo = async (lat: number, lng: number) => {
    const { setReceivedData } = states;

    try {
      const data = await getSolarInformationsByAddress(lat, lng);
      console.log('data', data);
      setReceivedData(data);
    } catch (e) {
      setReceivedData(null);
    };
  };

  return {
    getSolarInfo,
  }
};