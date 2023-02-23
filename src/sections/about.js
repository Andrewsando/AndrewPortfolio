import "./about.css";
import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { useWindowSize } from "../utils/screenSizeUtil";

function Informacion() {
  const { width } = useWindowSize();
  const isMobile = width <= 950;

  return (
    <section id="informacion">
      <Grid container>
        {!isMobile && (
          <>
            <Grid
              item
              sm={1}
              md={2}
              direction="column"
              justifyContent="start"
              
            >
              <div class="imagenes1 huevo">
                <img src="./imagenes/Panda.png" alt="idea"></img>
              </div>
            </Grid>
          </>
        )}

        <Grid
          item
          sm={12}
          md={8}
          direction="column"
          justifyContent="space-between"
          className="container"
        >
          <Stack spacing={5} className="stack">
            <Typography variant="h1" class="titulo">
              About me!
            </Typography>

            <Typography variant="h5">
              I am a web developer, I do not have much experience in the
              workplace,{" "}
              <b class="orangeText">so I am a junior front end developer</b>, I
              have done several projects that you can find in the jobs section.
            </Typography>
            <Typography variant="h5">
              I like to define myself as a very focused, organized person,
              capable of adapting to different environments and who is
              passionate about constant personal and professional growth.
            </Typography>
            <Typography variant="h5">
              I am inspired by the things that fill me with creativity and feed
              my passions, make me develop and function in my daily life.
            </Typography>
            <Typography variant="h5">
              I fill myself with energy doing the things that I like the most,
              my hobbies, among which are going for a walk, enjoying the breeze,
              the sun, etc., I like to read, play, learn and{" "}
              <b class="blueText">challenge myself to new things.</b>
            </Typography>
            <Typography variant="h5">
              I like to be in constant development, becoming an expert in the
              areas in which I challenge myself and where I know I have many
              shortcomings.
            </Typography>
            <Typography variant="h5">
              <b class="orangeText">You can read more about me in my resume!</b>
            </Typography>
          </Stack>
        </Grid>
        {!isMobile && (
          <>
            <Grid
              item
              sm={1}
              md={2}
              direction="column"
              justifyContent="start"
            >
              <div class="imagenes2 circulo">
                <img src="./imagenes/Amorypaz.png" alt="Amor y paz"></img>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </section>
  );
}

export default Informacion;
