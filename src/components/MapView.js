import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Markers } from './Markers';
import 'leaflet/dist/leaflet.css';





const MapView = () => {
    // const coords = [6.210127773308834, -75.5667874851571];
    const position = [11.2252, -74.197];
  return (
    
    <MapContainer center={position} zoom={16}>
    <TileLayer
      url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
    //   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  

    <Markers coords={position} poptext={'Never stop learning!'}/>
  </MapContainer>
  )
}

export default MapView;
