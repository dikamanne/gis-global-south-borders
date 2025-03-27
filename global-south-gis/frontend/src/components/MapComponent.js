import { useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'

const MapComponent = () => {
    const mapRef = useRef();
    const mapContainerRef = useRef();
  
    useEffect(() => {
      // Set the Mapbox access token
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGlrYW1hbm5lIiwiYSI6ImNtOHJ0YmlwejBudTAybW9tYm9kdDNpZnIifQ.NtOwAqk00X2VnxETflDzvw';
  
      // Initialize the map
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v10', // Use the default Mapbox style or any style you prefer
        center: [10, 10], // Initial map center coordinates (longitude, latitude)
        zoom: 3, // Initial zoom level
      });
  
      // Clean up on component unmount
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    }, []);
  
    return (
      <div
        ref={mapContainerRef}
        style={{ width: '100%', height: '500px' }} // Set the desired size for the map
      />
    );
  };
  
  export default MapComponent;
