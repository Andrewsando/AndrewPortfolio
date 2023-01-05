import './about.css';
import React from 'react';

function Informacion (){
        return (
            <section id="informacion">
                <div class="imagenes1 huevo"> 
                     <img src='./imagenes/Panda.png'  alt="idea"></img>
                </div>
            <div> 
                <b class="titulo">About me!</b>        
                <p>I am a web developer, I do not have much experience in the workplace, <b class="orangeText">so I am a junior front end developer</b>, I have done several projects that you can find in the jobs section.</p>
                <p>I like to define myself as a very focused, organized person, capable of adapting to different environments and who is passionate about constant personal and professional growth.</p>
                <p>I am inspired by the things that fill me with creativity and feed my passions, make me develop and function in my daily life.</p>
                <p>I fill myself with energy doing the things that I like the most, my hobbies, among which are going for a walk, enjoying the breeze, the sun, etc., I like to read, play, learn and <b class="blueText">challenge myself to new things.</b></p>
                <p>I like to be in constant development, becoming an expert in the areas in which I challenge myself and where I know I have many shortcomings.</p>
                <p><b class="orangeText">You can read more about me in my resume!</b></p>
            </div>
            <div class="imagenes2 circulo">
            <img src='./imagenes/Amorypaz.png'  alt="Amor y paz"></img>
            </div>
            </section>
        )
      }

export default Informacion;