import React from "react";
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapComponent from "./components/MapComponent.js";

const App = () => {
  return (
    <div>
      <h1>Global South Borders</h1>
      <MapComponent /> {/* Render the MapComponent */}
    </div>
  );
};

export default App;



