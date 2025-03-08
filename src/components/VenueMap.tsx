import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

// Composant qui charge la carte uniquement côté client
const VenueMap = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [Map, setMap] = useState<any>(null);

  useEffect(() => {
    // Importer dynamiquement les modules Leaflet uniquement côté client
    const loadMap = async () => {
      try {
        const leaflet = await import('leaflet');
        const reactLeaflet = await import('react-leaflet');
        
        // Créer l'icône Leaflet
        const icon = leaflet.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
        
        // Stocker les modules et l'icône dans l'état
        setMap({ reactLeaflet, leaflet, icon });
        setIsMounted(true);
      } catch (error) {
        console.error("Erreur lors du chargement de la carte:", error);
      }
    };
    
    loadMap();
  }, []);

  if (!isMounted || !Map) {
    // Afficher un placeholder pendant le chargement
    return (
      <div 
        className="flex items-center justify-center bg-dark-700 h-full w-full rounded-lg"
        style={{ height: '100%', width: '100%' }}
      >
        <p className="text-gray-400">Chargement de la carte...</p>
      </div>
    );
  }

  // Destructurer les composants de react-leaflet
  const { MapContainer, TileLayer, Marker, Popup } = Map.reactLeaflet;
  
  // Coordonnées du Centre Saint-Pierre à Montréal
  const position = [45.5184, -73.5573];
  
  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={Map.icon}>
        <Popup>
          <strong>Centre Saint-Pierre</strong><br />
          1212 Rue Panet<br />
          Montréal, QC H2L 2Y7
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default VenueMap;
