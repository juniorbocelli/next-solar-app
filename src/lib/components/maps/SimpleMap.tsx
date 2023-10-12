'use client'

import React from 'react';
import GoogleMapReact, { ChildComponentProps, } from 'google-map-react';

// ----------------------------------------------------------------------

interface Props extends ChildComponentProps {
  text: string;
}
const AnyReactComponent = (props: Props) => {
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
  const defaultProps = {
    center: {
      lat: -22.2265,
      lng: -54.7937
    },
    zoom: 4
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSbKFH_ZxHONzC59sQFAIZhV6FS5dzlT0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-22.2265335}
          lng={-54.7937397}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}