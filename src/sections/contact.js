import "./contact.css";
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useWindowSize } from "../utils/screenSizeUtil";


function Contact() {
  const { width } = useWindowSize();
  const isMobile = width <= 950;
  return (
    <section id="contact">
      <Grid container spacing={2}>
        <Grid
          item
          sm={12}
          md={6}
          direction="column"
          justifyContent="start"
          className="container"
        >
          <Stack textAlign="center">
            <Typography variant="h3" class="tituloContact">
              Let's do cool stuff together!
            </Typography>
            <Typography variant="h5">
              I am looking for the opportunity to collaborate with companies,
              agencies, start ups, I want to offer my knowledge for the benefit
              of a common good, I learn while I provide my development services.
            </Typography>
            <Typography variant="h1" class="boldText">
              together we can make great things!.
            </Typography>
            <Typography variant="h1" class="boldText">
              You can write me to the mail!
            </Typography>
            <Typography variant="h5">
              <b>andres.torressandoval@hotmail.com</b>
            </Typography>
          </Stack>
        </Grid>
        {!isMobile && (
          <>
        <Grid
          item
          sm={3}
          md={3}
          direction="column"
          justifyContent="start"
          className="container"
        >
          <img
            class="corazon1 huevo2"
            src="./imagenes/CorazonManos.png"
            alt="CorazonManos"
          ></img>
        </Grid>
        <Grid
          item
          sm={3}
          md={3}
          direction="column"
          justifyContent="end"
          className="container"
        >
          <img
            class=" corazon huevo2"
            src="./imagenes/CorazonDedos.png"
            alt="Corazon"
          ></img>
        </Grid>
        </>)}
      </Grid>
    </section>
  );
}

export default Contact;
