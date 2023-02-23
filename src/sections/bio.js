import "./bio.css";
import React from "react";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Stack } from "@mui/system";
import { useWindowSize } from "../utils/screenSizeUtil";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Presentacion() {
  const { width } = useWindowSize();
  const isMobile = width <= 900;
  const isDesktop = width >= 1220;

  return (
    <section id="presentacion">
      <Grid container spacing={2} minHeight="90vh">
        <Grid
          item
          sm={12}
          md={3}
          direction="column"
          justifyContent="center"
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
            >
              {isDesktop && (
                <div class="shape2 moveLeft">
                  <img
                    class="imgPequeSaludo"
                    src="/imagenes/dedoArriba.png"
                    alt="dedoArriba"
                  ></img>
                </div>
              )}
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
          direction='çolumn'
          justifyContent="center" 
          className="parrafoPresentacion"
        >
          <Stack spacing={5} padding={4}>
            <Typography variant="h1"><b>¡Hello!</b></Typography>
            <Typography variant="h2" fontWeight="400">
              I'm Andres Torres Sandoval
            </Typography>
            <Typography variant="h3">I'm front-end developer</Typography>
          </Stack>
        </Grid>
        <Grid item sm={12} md={12} alignItems="center" marginTop="5rem">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            size="2rem"
            justifyContent="center"
          >
            <Link href="https://wa.me/573057064868/" underline="hover">
              <input hidden accept="image/*" type="file" />
              <WhatsAppIcon sx={{ color: "white", fontSize: 40, m: 2 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/andr%C3%A9s-torres-sandoval-988665175/"
              underline="hover"
            >
              <input hidden accept="image/*" type="file" />
              <LinkedInIcon sx={{ color: "white", fontSize: 40, m: 2 }} />
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </section>
  );
}

export default Presentacion;
