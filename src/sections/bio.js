import './bio.css';
import React from 'react';

function Presentacion (){
        return (
        <section id="presentacion">
            <div class="parrafoPresentacion">
                <h1>¡Hello!</h1>
                <h1>I'm Andres Torres Sandoval</h1>
                <h1>I'm from Bogota, Colombia</h1> 
            </div>
            <img class="imgSaludo" src='/imagenes/Saludo.png' alt="Saludo"></img>  
        </section>
        )
      }

export default Presentacion;