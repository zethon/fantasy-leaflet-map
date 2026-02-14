import "./App.css";
import React, { useState } from "react";
import MapPanel from "./components/MapPanel";
import ContainerizedPage from "./components/ContainerizedPage";
const App = () => {
  const [showContainerized, setShowContainerized] = useState(false);
  
  return (
    <div className="App">
      {showContainerized ? (
        <ContainerizedPage onBack={() => setShowContainerized(false)} />
      ) : (
        <>
          <MapPanel fullScreen={true} />
          <button
            className="containerized-button"
            onClick={() => setShowContainerized(true)}
          >
            Containerized
          </button>
        </>
      )}
    </div>
  );
};

export default App;
