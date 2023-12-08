import React, { useEffect } from 'react';
import L from 'leaflet';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './MapComponent.css'; // Your CSS file for styles

const MyMapComponent = () => {
  const location = useLocation(); // Hook to get location state

  useEffect(() => {
    const defaultCoords = [51.505, -0.09]; // Default coordinates
    const zoomLevel = 40; // Default zoom level

    // Check if the location state is available, otherwise use default coordinates
    const coords = location.state ? [location.state.lat, location.state.lng] : defaultCoords;

    let map = window.myMap;
    if (!map) {
      // Initialize the map if it hasn't been created yet
      map = L.map('map-container').setView(coords, zoomLevel);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      window.myMap = map;
    } else {
      // Map exists, so just set the new view
      map.setView(coords, zoomLevel);
      setTimeout(() => map.invalidateSize(), 100); // Adjust size if container size changed
    }

    return () => {
      // Clean up map when the component is unmounted
      map.remove();
      window.myMap = null;
    };
  }, [location.state]); // Dependency array now includes location.state to re-run effect when it changes

  const goBack = () => {
    window.history.back(); // Go back to previous page
  };

  return (
    <div id="map-container" style={{ height: '500px', width: '100%', position: 'relative' }}>
      <button onClick={goBack} className="back-button">
        Back
      </button>
    </div>
  );
};

export default MyMapComponent;
