import * as L from 'leaflet';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

import markercito from 'leaflet/dist/images/marker-icon.svg';


export const MarkerIconLocation = L.icon({

  iconUrl: markercito,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",

});