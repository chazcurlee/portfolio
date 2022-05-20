import { Card, CardActionArea, CardActions, CardMedia } from "@mui/material";
import React from "react";
import resume from "../assets/img/resume.png";
import ResumeCopy from "../assets/files/ResumeCopy.pdf";

const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <Card>
        <a href="https://docs.google.com/document/d/1TyzUGlZK5YQHXGNvPZzyu-oYiESuD2eQFUQCRMrxKPk/edit?usp=sharing">
          <CardMedia
            component="img"
            height="auto"
            image={resume}
            alt="letterle logo"
          ></CardMedia>
        </a>
      </Card>
    </div>
  );
};

export default Resume;
