import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

const Landing = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Paper sx={{ textAlign: "center" }} elevation={3}>
          <h1>Chaz Curlee</h1>
          <Divider sx={{ color: "black", maxWidth: "100%" }} />
          <h3>Software Engineer</h3>
          <Divider sx={{ color: "black", maxWidth: "100%" }} />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Card>
                <Link to="/about-me">About Me</Link>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Link to="/projects">Projects</Link>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Link to="/resume">Resume</Link>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <Link to="/contact">Contact Me</Link>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Landing;
