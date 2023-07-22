import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React from "react";
import { useSelector } from "react-redux";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCq71N1GHDQWEhBF16jWgKY-pN4nM0fUFM",
  });
  const [map, setMap] = useState(null);
  const latlong = useSelector((state) => state.brewery.latlong);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(latlong);
      map.fitBounds(bounds);
      setMap(map);
    },
    [setMap]
  );
  const onUnmount = useCallback(
    (map) => {
      setMap(null);
    },
    [setMap]
  );
  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="fitall"
      center={latlong}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={latlong}></Marker>
    </GoogleMap>
  ) : (
    <div>Google Map has an error</div>
  );
}

export default Map;
