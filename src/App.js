import "./App.css";
import React, { useState } from "react";
import { AttributionControl, MapContainer } from "react-leaflet";
import { CRS } from "leaflet";
import EventComponent from "./components/EventComponent";
import MapElements from "./components/markers/MapElements";
const App = () => {
  //Change this to match the highest number tile you generated
  const ZOOM_LEVELS = 6;
  //Change this to the zoom level you wish to start on
  const STARTING_ZOOM = 5;
  //Change this to the focal point of your map
  const CENTER_POINT = [0, 0];

  // Map the pixel middle to the coordinate system
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  // const initialCenter = [centerY, centerX];
  const initialCenter=[-50, 25]

  const [currentZoom, setZoomLevel] = useState(STARTING_ZOOM);
  const updateZoom = (newZoomLevel) => setZoomLevel(newZoomLevel);

  const [coords, setCoords] = useState([0, 0]);
  const updateCoords = (coords) => setCoords(coords);
  return (
    <div className="App">
      <MapContainer
        // center={CENTER_POINT}
        center={initialCenter}
        minZoom={3}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: window.innerHeight, width: window.innerWidth }}
        // style={{ height: "100vh", width: "100vw" }}
        crs={CRS.Simple}
        maxZoom={ZOOM_LEVELS}
        attributionControl={false}
      >
        <MapElements zoom={currentZoom} coords={coords} />
        <EventComponent updateZoom={updateZoom} updateCoords={updateCoords} />
        <AttributionControl
          position={"bottomright"}
          prefix={"Icons from Game-icons.net"}
        />
      </MapContainer>
      <div className="zoom-indicator">
        Zoom Level: {currentZoom}
      </div>
      <div className="coords-indicator">
        Center: [{coords[0].toFixed(2)}, {coords[1].toFixed(2)}]
      </div>
    </div>
  );
};

export default App;
