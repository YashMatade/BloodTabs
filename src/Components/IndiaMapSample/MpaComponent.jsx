import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Coordinates of India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
