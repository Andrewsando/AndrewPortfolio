import "./extras.css";
import React from "react";
import { FaHtml5, FaSass, FaBootstrap, FaGithub, FaNodeJs} from "react-icons/fa";
import { DiCss3 , DiReact, DiVisualstudio, DiFirebase} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";


function Extras() {
  return (
    <section id="seccionExtras">
      <div class="programming">
        <div>
        <b class="tituloExtra">Programming languages ​​I've used</b>
        <p><FaHtml5 style={{fontSize:'35px'}}/> HTMLT </p>
        <p><DiCss3 style={{fontSize:'35px'}}/> CSS </p>
        <p> <FaSass style={{fontSize:'35px'}}/> SASS</p>
        <p> <DiReact style={{fontSize:'35px'}}/> React</p>
        <p> <SiJavascript style={{fontSize:'35px'}}/>  Javascript</p>
        <p><AiOutlineConsoleSql style={{fontSize:'35px'}}/> SQL</p>
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
        <p>Bootstrap <FaBootstrap style={{fontSize:'35px'}}/></p>
        <p>Github <FaGithub style={{fontSize:'35px'}}/></p>
        <p>Vscode <DiVisualstudio style={{fontSize:'35px'}}/></p>
        <p>Firebase <DiFirebase style={{fontSize:'40px'}}/></p>
        <p>Node JS <FaNodeJs style={{fontSize:'35px'}}/></p>
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
