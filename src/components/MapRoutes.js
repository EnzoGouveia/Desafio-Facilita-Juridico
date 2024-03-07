import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function MapRoutes({ users }) {
    if (!Array.isArray(users) || users.length === 0) {
        return
    }
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });
    
    const coordinates = users.map(user => [user.coordinates.y, user.coordinates.x]);
    coordinates.unshift([0, 0]); // Adiciona [0,0] no começo do array
    coordinates.push([0, 0]);

  return (
    <MapContainer center={[0, 0]} zoom={5} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={[0, 0]}>
            <Popup>COMPANY</Popup>
        </Marker>
      {users.map((user, i) => (
        <Marker position={[user.coordinates.y, user.coordinates.x]}>
            <Popup>
                <p>N°: {i+1}</p>
                <p>Name: {user.name}</p>
            </Popup>
        </Marker>
      ))}
      <Polyline
        positions={coordinates}
        color="blue"
      />
    </MapContainer>
  );
}

export default MapRoutes;