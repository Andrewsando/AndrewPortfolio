import "./extras.css";
import React from "react";

function Extras() {
  return (
    <section id="seccionExtras">
      <div class="programming">
        <div>
        <b class="tituloExtra">Programming languages ​​I've used</b>
        <p>HTML</p>
        <p>CSS</p>
        <p>React</p>
        </div>
      <img
        class="computador huevoExtras"
        src="./imagenes/Computador.png"
        alt="Computador"
      ></img>
      </div>
      <div class="development">
        <div>
        <b class="tituloExtra">Development tools I've used</b>
        <p>Bootstrap</p>
        <p>Github</p>
        </div>
      <img
        class="computador huevoExtras"
        src="./imagenes/Perrito.png"
        alt="Perrito"
      ></img>
      </div>
      <br></br>
    </section>
  );
}

export default Extras;
