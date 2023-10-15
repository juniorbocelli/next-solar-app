import React from 'react';
import {
  IUseMarkerStates,

  ReceivedDataState,
  IsQueryingAPIState,
  OpenState,
} from './types';

export default function useMarkerStates(): IUseMarkerStates {
  const [receivedData, setReceivedData] = React.useState<ReceivedDataState | null>(null);
  const handleReceivedDataChange = React.useCallback((receivedData: ReceivedDataState) => {
    setReceivedData(receivedData);
  }, []);

  const [isQueryingAPI, setIsQueryingAPI] = React.useState<IsQueryingAPIState>(false);
  const handleIsQueryingAPIChange = React.useCallback((isQueryingAPI: IsQueryingAPIState) => {
    setIsQueryingAPI(isQueryingAPI);
  }, []);

  const [open, setOpen] = React.useState<OpenState>(false);
  const handleOpenChange = React.useCallback((open: OpenState) => {
    setOpen(open);
  }, []);

  return {
    receivedData,
    handleReceivedDataChange,

    isQueryingAPI,
    handleIsQueryingAPIChange,

    open,
    handleOpenChange,
  };
};