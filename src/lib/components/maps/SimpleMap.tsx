'use client'

import React, { useRef, useState } from 'react';
// maps
import GoogleMap, { Map } from 'google-maps-react-markers';
// contexts
import { useAddresses } from '@/lib/contexts/addresses';
// components
import { Marker } from '.';
// @types
import { IAddress } from '@/lib/@types/address';
import { IMapConfiguration } from './types';
//
import { HEADER_HEIGHT, GOOGLE_API_KEY } from '@/config-global';

// ----------------------------------------------------------------------

interface SimpleMapProps {
  addresses: IAddress[];
};

export default function SimpleMap(props: SimpleMapProps) {
  const mapRef = useRef<Map | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const { handleAddressesChange, selectedAddress } = useAddresses();
  const { addresses } = props;

  const defaultConfiguration: IMapConfiguration = {
    zoom: 5,
    position: {
      lat: -22.2265,
      lng: -54.7937,
    },
  };

  // Handle selectedAddress change
  React.useEffect(() => {
    if (selectedAddress !== null) {
      const lat = Number(selectedAddress.latitude);
      const lng = Number(selectedAddress.longitude);

      mapRef.current.setCenter({ lat, lng });
      mapRef.current.setZoom(19);
    }

  }, [selectedAddress]);

  // Zoom control
  const [zoom, setZoom] = useState<number>(5);

  const handleZoomChange = (zoom: number) => {
    setZoom(zoom)
  };

  const onGoogleApiLoaded = ({ map, maps }: { map: Map, maps: Map }) => {
    mapRef.current = map;
    setMapReady(true);
    handleAddressesChange(addresses);
  };

  return (
    <div style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)`, width: '100%' }}>
      <GoogleMap
        apiKey={GOOGLE_API_KEY}
        defaultCenter={{ lat: defaultConfiguration.position.lat, lng: defaultConfiguration.position.lng }}
        defaultZoom={defaultConfiguration.zoom}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => handleZoomChange(map.zoom)}
      >
        {
          mapReady ?
            addresses.map(a => (<Marker
              key={a.uuid}
              lat={Number(a.latitude)}
              lng={Number(a.longitude)}
              address={a}
              zoom={zoom}
            />))
            :
            null
        }
      </GoogleMap>
    </div>
  );
}