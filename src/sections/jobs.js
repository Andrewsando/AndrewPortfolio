import "./jobs.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import BasicModal from "../components/NodalSkinfreshHtml";
import BasicModalReact from "../components/NodalSkinfreshReact";

export default function Jobs() {
  return (
    <section id="jobs">
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={12} md={12}>
          <div>
            <b class="jobsTitle">Projects</b>
          </div>
        </Grid>
        <Grid item sm={10} md={6} className="cards">
          <Card sx={{ maxWidth: 450 }}className="klo">
            <CardActionArea>
              <CardMedia
                component="img"
                height="400px"
                image="/imagenes/skinFreshHTML.jpeg"
                alt="Skinfresh HTML"
              />
              <CardContent>
                <Typography
                  class="subtitleCard"
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  Skinfresh HTML project
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BasicModal />
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={10} md={6} className="cards">
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
              <CardMedia
                class="imagenCard"
                component="img"
                height="400px"
                image="/imagenes/SkinfreshReact.png"
                alt="Skinfresh HTML"
              />
              <CardContent>
                <Typography
                  class="subtitleCard"
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  Skinfresh React project
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BasicModalReact />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}
