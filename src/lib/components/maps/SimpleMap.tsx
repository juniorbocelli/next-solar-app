'use client'

import React, { useRef, useState } from 'react';
// maps
import GoogleMap, { Map, MapMarkersProps } from 'google-maps-react-markers';
// components
import { Marker } from '.';
//
import { HEADER_HEIGHT } from '@/config-global';

// ----------------------------------------------------------------------

const AnyReactComponent = (props: any) => {
  return (
    <div style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {props.text}
    </div>
  );
};

// ----------------------------------------------------------------------

export default function SimpleMap() {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const onGoogleApiLoaded = ({ map, maps }: { map: Map, maps: Map }) => {
    mapRef.current = map;
    setMapReady(true);
  };


  return (
    <div style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)`, width: '100%' }}>
      <GoogleMap
        apiKey="AIzaSyDSbKFH_ZxHONzC59sQFAIZhV6FS5dzlT0"
        defaultCenter={{ lat: -22.2265, lng: -54.7937 }}
        defaultZoom={5}
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log('Map moved', map)}
      >
        <Marker
          lat={-22.2265335}
          lng={-54.7937397}
          text="My Marker"
          zoom={10}
        />
      </GoogleMap>
    </div>
  );
}