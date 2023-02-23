import "./extras.css";
import React from "react";
import {
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { DiCss3, DiReact, DiVisualstudio, DiFirebase } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { Grid, Stack, Typography } from "@mui/material";
import { useWindowSize } from "../utils/screenSizeUtil";

function Extras() {
  const { width } = useWindowSize();
  const isMobile = width <= 900;
  return (
    <section id="seccionExtras">
      <Grid container rowSpacing={10} className="programming">
        <Grid item sm={12} md={6} justifyContent="start">
          <Stack spacing={2}>
            <Typography variant="h3" className="tituloExtra" fontWeight="bold">
              Programming languages ​​I've used
            </Typography>
            <Typography variant="p">
              <FaHtml5 style={{ fontSize: "35px" }} /> HTMLT{" "}
            </Typography>
            <Typography variant="p">
              <DiCss3 style={{ fontSize: "35px" }} /> CSS{" "}
            </Typography>
            <Typography variant="p">
              <FaSass style={{ fontSize: "35px" }} /> SASS
            </Typography>
            <Typography variant="p">
              <DiReact style={{ fontSize: "35px" }} /> React
            </Typography>
            <Typography variant="p">
              <SiJavascript style={{ fontSize: "35px" }} /> Javascript
            </Typography>
            <Typography variant="p">
              <AiOutlineConsoleSql style={{ fontSize: "35px" }} /> SQL
            </Typography>
          </Stack>
        </Grid>
        {!isMobile && (
          <>
        <Grid item sm={6} md={6} direction="column" justifyContent="start">
          <img
            class="computador huevoExtras"
            src="./imagenes/Computador.png"
            alt="Computador"
          ></img>
        </Grid>
        <Grid item sm={6} md={6} direction="row" justifyContent="start">
          <img
            class="computador huevoExtras"
            src="./imagenes/Perrito.png"
            alt="Perrito"
          ></img>
        </Grid>
        </>
        )}
        <Grid
        
          item
          sm={12}
          md={6}
          direction="row"
          justifyContent="start"
        >
          <Stack spacing={2}>
            <Typography variant="h3" className="tituloExtra" fontWeight="bold">
              Development tools I've used
            </Typography>
            <Typography variant="p">
              Bootstrap <FaBootstrap style={{ fontSize: "35px" }} />
            </Typography>
            <Typography variant="p">
              Github <FaGithub style={{ fontSize: "35px" }} />
            </Typography>
            <Typography variant="p">
              Tailwindcss <SiTailwindcss style={{ fontSize: "35px" }} />
            </Typography>
            <Typography variant="p">
              Vscode <DiVisualstudio style={{ fontSize: "35px" }} />
            </Typography>
            <Typography variant="p">
              Firebase <DiFirebase style={{ fontSize: "35px" }} />
            </Typography>
            <Typography variant="p">
              Node JS <FaNodeJs style={{ fontSize: "35px" }} />
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export default Extras;
