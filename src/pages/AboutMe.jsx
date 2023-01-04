import { Paper, Divider, Grid } from "@mui/material";
import AccordianComp from "../components/AccordianComp";
import selfPortrait from "../assets/img/pic.jpeg";

const AboutMe = ({ Info, classState }) => {
  return (
    <Paper
      className={classState}
      sx={{
        backgroundColor: "black",
        color: "white",
        maxWidth: "50vw",
        position: "absolute",
        left: "25%",
        marginBottom: "20px",
      }}
    >
      <h1>About Me</h1>
      <Divider sx={{ color: "white", backgroundColor: "white" }} />
      <Grid
        container
        direction="column"
        sx={{
          display: "grid",
          gridTemplateColumns: "2",
        }}
      >
        <Grid item gridColumn="1">
          <AccordianComp type={"LOCATION"} Info={Info} />
          <AccordianComp type={"LANGUAGES"} Info={Info} />
          <AccordianComp type={"TECHNOLOGIES"} Info={Info} />
          <AccordianComp type={"OTHER"} Info={Info} />
          <AccordianComp type={"HISTORY"} Info={Info} />
        </Grid>
        <Grid item gridColumn="2" sx={{ padding: "5px" }}>
          <img src={selfPortrait} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;
