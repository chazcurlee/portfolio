import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { useState } from "react";
import "../index.css";

const Landing = () => {
  let [classState, setClassState] = useState("hidden");

  const handleClick = (e) => {
    if (classState === "hidden") {
      setClassState("grow");
    }
    if (classState === "grow") {
      setClassState("hidden");
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid item>
        <Paper class="landing">
          <h1 class="name" onClick={handleClick}>
            Chaz Curlee
          </h1>
          <p class="small">(Click my name!)</p>
          <Divider
            class={classState}
            sx={{ color: "black", maxWidth: "100%" }}
          />
          <h3 class={classState}>Software Engineer</h3>
          <Divider
            class={classState}
            sx={{ color: "black", maxWidth: "100%" }}
          />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Card class={classState}>
                <Link class="hover-3" to="/about-me">
                  About Me
                </Link>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card class={classState}>
                <Link class="hover-3" to="/projects">
                  Projects
                </Link>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card class={classState}>
                <Link class="hover-3" to="/resume">
                  Resume
                </Link>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card class={classState}>
                <Link class="hover-3" to="/contact">
                  Contact Me
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Landing;
