import React from "react";
import Informacion from "./sections/about";
import Presentacion from "./sections/bio";

function App() {
  return (
        <div className="App">
          <Presentacion />
          <Informacion />
        </div>
  );
}

export default App;
