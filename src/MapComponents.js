import React, { useEffect } from 'react';
import L from 'leaflet';
import { useLocation } from 'react-router-dom';
import './MapComponent.css'; // Your CSS file for styles

const MyMapComponent = () => {
  const location = useLocation();
  let map; // Define map variable outside useEffect for broader scope if needed

  useEffect(() => {
    // Parse the query parameters
    const queryParams = new URLSearchParams(location.search);
    const lat = parseFloat(queryParams.get('lat'));
    const lng = parseFloat(queryParams.get('lng'));
    const coords = lat && lng ? [lat, lng] : [51.505, -0.09]; // Default to London if no parameters provided
    const zoomLevel = 40; // Adjusted zoom level to a more standard value

    map = L.map('map-container').setView(coords, zoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    return () => {
      map.remove(); // Clean up the map instance when the component unmounts
    };
  }, [location.search]); // Depend on location.search to re-run the effect when URL query params change

  // This function will be called when the fullscreen button is clicked
  const goFullScreen = () => {
    const element = document.getElementById('map-container');
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <div id="map-container" style={{ height: '100%', width: '100%' }}></div>
      <button onClick={goBack} className="back-button">
        Back
      </button>
      <button onClick={goFullScreen} style={{ position: 'absolute', top: '10px', right: '10px' }}>
        Fullscreen
      </button>
    </div>
  );
};

export default MyMapComponent;
