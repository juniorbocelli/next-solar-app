import React from 'react';
import {
  IUseMarkerStates,
  ReceivedDataState,
} from './types';

export default function useMarkerStates(): IUseMarkerStates {
  const [receivedData, setReceivedData] = React.useState<ReceivedDataState | null>(null);

  return {
    receivedData,
    setReceivedData,
  };
};