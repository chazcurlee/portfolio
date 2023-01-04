import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import resume from "../assets/img/resume.png";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <Card sx={{}}>
        <a href="https://docs.google.com/document/d/1TyzUGlZK5YQHXGNvPZzyu-oYiESuD2eQFUQCRMrxKPk/edit?usp=sharing">
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={resume}
            alt="letterle logo"
          ></CardMedia>
        </a>
      </Card>
    </div>
  );
};

export default Resume;
