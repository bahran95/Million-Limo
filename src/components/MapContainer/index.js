import React, { Component } from "react";
import "./MapContainer.css";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapContainer = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 33.4484, lng: -112.074 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 33.4484, lng: -112.074 }} />
      )}
    </GoogleMap>
  ))
);

export default MapContainer;
