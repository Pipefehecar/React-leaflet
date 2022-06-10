import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import {MarkerIconLocation}  from './IconMarker';

export const Markers = ({coords, poptext}) => {
    console.log(poptext);
  return(
    <Marker position={ coords } icon={MarkerIconLocation}>
        <Popup>
            {poptext}
                
            
        </Popup>
    </Marker>
  )
}
