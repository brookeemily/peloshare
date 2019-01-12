import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

ReactDOM.render(<App />, document.getElementById("app"));
// registerServiceWorker();
