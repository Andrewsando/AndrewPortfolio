import "./bio.css";
import React from "react";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Stack } from "@mui/system";
import { useWindowSize } from "../utils/screenSizeUtil";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Presentacion() {
  const {width} = useWindowSize()
  const isMobile = width <=720
  
  return (
    <section id="presentacion">
      <Grid container spacing={2} m="0 1rem">
        <Grid
          item
          sm={12}
          md={3}
          direction="column"
          justifyContent="center"
          className="container"
        >
          <div class="shape">
            <img
              class="imgSaludo"
              src="/imagenes/Saludo.png"
              alt="Saludo"
            ></img>
          </div>
        </Grid>
        {!isMobile && (
          <>
            <Grid
              item
              sm={6}
              md={2}
              direction="column"
              justifyContent="start"
              className="container"
            >
              <div class="shape2">
                <img
                  class="imgPequeSaludo"
                  src="/imagenes/dedoArriba.png"
                  alt="dedoArriba"
                ></img>
              </div>
            </Grid>
            <Grid
              item
              sm={6}
              md={1}
              direction="column"
              justifyContent="end"
              className="container"
            >
              <div class="shape3">
                <img
                  class="imgPequePuñito"
                  src="/imagenes/puñito.png"
                  alt="puñito"
                ></img>
              </div>
            </Grid>
          </>
        )}
        <Grid
          item
          sm={12}
          md={6}
          justifyContent="center"
          className="parrafoPresentacion"
        >
          <Stack spacing={5}>
            <Typography variant="h1">¡Hello!</Typography>
            <Typography variant="h3" fontWeight="400">
              I'm Andres Torres Sandoval
            </Typography>
            <Typography variant="h4">I'm front-end developer</Typography>
          </Stack>
        </Grid>
        <Grid item sm={12} md={12} alignItems="center">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            size="2rem"
          >
            <Link href="https://wa.me/573057064868/" underline="hover">
              <input hidden accept="image/*" type="file" />
              <WhatsAppIcon sx={{ color: "white",  fontSize: 40 , m: 2}} />
            </Link>
            <Link href="https://www.linkedin.com/in/andr%C3%A9s-torres-sandoval-988665175/" underline="hover">
              <input hidden accept="image/*" type="file" />
              <LinkedInIcon sx={{ color: "white" ,  fontSize: 40, m: 2 }} />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </section>
  );
}

export default Presentacion;
