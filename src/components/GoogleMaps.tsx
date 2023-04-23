import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // googleMapsApiKey gets an error stating 'string | undefined' is not assignable to 'string'. Using the nullish coalescing operator (??) as a means for a fallback of 'string'
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <h1>Loaded</h1>
        <p>loaded</p>
      </>
    </GoogleMap>
  ) : (
    <>
      <h1>Not loaded</h1>
      <p>Again not loaded</p>
    </>
  );
};

export default GoogleMaps;
