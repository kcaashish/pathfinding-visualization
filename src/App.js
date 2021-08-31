import React, { useEffect } from "react";
import "./App.css";
import PathFindingVisualizer from "./components/path_finding";

function App() {
  useEffect(() => {
    document.title = "Path Finding Visualizer";
  }, []);

  return (
    <div className="App">
      <PathFindingVisualizer></PathFindingVisualizer>
    </div>
  );
}

export default App;
