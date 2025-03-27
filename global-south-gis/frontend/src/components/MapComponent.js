import React, { useState } from "react";
import Map, { Source, Layer } from "react-map-gl";

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    longitude: 10,
    latitude: 10,
    zoom: 3,
  });

  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      <Source id="historical-borders" type="geojson" data="path-to-historical-boundaries.geojson">
        <Layer
          id="historical-layer"
          type="line"
          paint={{ "line-color": "#ff0000", "line-width": 2 }}
        />
      </Source>
    </Map>
  );
};

export default MapComponent;
