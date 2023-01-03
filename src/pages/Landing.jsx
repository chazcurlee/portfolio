import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { useState } from "react";
import "../index.css";
import { useEffect } from "react";

const Landing = () => {
  let [classState, setClassState] = useState("hidden");
  let [buttonClassState, setButtClassState] = useState("name-grow btn");
  let [nameState, setNameState] = useState("Software Engineer.");
  let [lockState, setLockState] = useState(true);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleClick = (e) => {
    if (classState === "hidden") {
      setLockState(false);
      setClassState("fadeIn");
      setNameState("Chaz Curlee");
      setButtClassState("full-grow btn btn-two");
    }
    if (classState != "hidden") {
      setLockState(true);
      setClassState("hidden");
      setNameState("Software Engineer.");
      setButtClassState("name-grow btn");
    }
  };

  return (
    <Grid
      container
      direction="column"
      // justifySelf="top"
      // alignSelf="top"
      // justifyContent="center"
      // alignItems="center"
      // height="100vh"
    >
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
            }}
            className={`item-1 ${classState}`}
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
            }}
            className={`${classState} item-2`}
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
            }}
            className={`${classState} item-3`}
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
            }}
            className={`${classState} item-4`}
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
