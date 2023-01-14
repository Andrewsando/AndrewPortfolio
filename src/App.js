import React from "react";
import Informacion from "./sections/about";
import Presentacion from "./sections/bio";
import Extras from "./sections/extras";
import Jobs from "./sections/jobs";
import Contact from "./sections/contact";


function App() {
  return (
        <div className="App">
          <Presentacion />
          <Informacion />
          <Extras />
          <Jobs />
          <Contact />
        </div>
  );
}

export default App;
