import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import "../index.css";

const Landing = ({
  setClassState,
  setButtClassState,
  buttonClassState,
  classState,
  nameState,
  setNameState,
  aniState,
  setAniState,
}) => {
  // let [classState, setClassState] = useState("hidden");
  // let [buttonClassState, setButtClassState] = useState("name-grow btn");
  // let [nameState, setNameState] = useState("Software Engineer.");

  const handleClick = (e) => {
    if (classState === "hidden") {
      setClassState("");
      setAniState("fadeIn");
      setNameState("Chaz Curlee");
      setButtClassState("full-grow btn btn-two");
    }
    if (classState != "hidden") {
      setClassState("hidden");
      setAniState("");
      setNameState("Software Engineer.");
      setButtClassState("name-grow btn");
    }
  };

  return (
    <Grid container direction="column">
      <Grid item justifySelf="center" alignSelf="center">
        <h1 className={buttonClassState} onClick={handleClick}>
          {nameState}
        </h1>
      </Grid>
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(4, 1fr)",
          gridTempalteColumns: "3",
        }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          item
          alignSelf="center"
          justifySelf="center"
          gridColumn="span 2"
          gridRow="1"
          xs={6}
        >
          <Card
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "100%",
              padding: "5px",
            }}
            className={`item-1 ${classState} ${aniState}`}
          >
            <Link className="item" to="/about-me">
              About Me
            </Link>
          </Card>
        </Grid>
        <Grid
          item
          alignSelf="center"
          justifySelf="center"
          gridColumn="span 2"
          gridRow="1"
          xs={6}
        >
          <Card
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "100%",
              padding: "5px",
            }}
            className={`${classState} ${aniState} item-2`}
          >
            <Link className="item" to="/projects">
              Projects
            </Link>
          </Card>
        </Grid>
        <Grid
          item
          alignSelf="center"
          justifySelf="center"
          gridColumn="2 / 3"
          gridRow="2"
          xs={6}
        >
          <Card
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "75%",
              padding: "5px",
            }}
            className={`${classState} ${aniState} item-3`}
          >
            <Link className="item" to="/resume">
              Resume
            </Link>
          </Card>
        </Grid>
        <Grid
          item
          alignSelf=""
          justifySelf="center"
          gridColumn="3 / 4"
          gridRow="2"
          xs={6}
        >
          <Card
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "75%",
              padding: "5px",
            }}
            className={`${classState} ${aniState} item-4`}
          >
            <Link className="item" to="/contact">
              Contact Me
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
