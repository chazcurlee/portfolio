import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import mindify from "../assets/img/mindify.png";
import dndbot from "../assets/img/dndbot.png";
import letterle from "../assets/img/letterle.png";
import recipecentral from "../assets/img/recipecentral.png";
import { useState } from "react";
import { styled } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
  const [expandedMind, setExpandedMind] = useState(false);
  const [expandedRecipe, setExpandedRecipe] = useState(false);
  const [expandedDnd, setExpandedDnd] = useState(false);
  const [expandedLetter, setExpandedLetter] = useState(false);

  const handleExpandClick = (e) => {
    if (e.target.name === "Mind") {
    }
  };

  return (
    <div>
      <Card sx={{ maxWidth: "80vw", marginBottom: "50px" }}>
        <CardActionArea>
          <CardMedia
            onClick={() => {
              window.open("https://recipe-central.onrender.com");
            }}
            component="img"
            height="140"
            image={recipecentral}
            alt="recipe central logo"
          />{" "}
        </CardActionArea>
        <CardHeader title="Recipe Central"></CardHeader> <Divider />
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              window.open("https://github.com/chazcurlee/recipe-central");
            }}
          >
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://recipe-central.onrender.com");
            }}
          >
            <WebIcon></WebIcon>
          </IconButton>
          <ExpandMore
            expand={expandedRecipe}
            onClick={() => setExpandedRecipe(!expandedRecipe)}
            aria-expanded={expandedRecipe}
            aria-label="show more"
            name="Recipe"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedRecipe} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              A one stop shop for all the most famous recipes of some of the
              most accalimed chefs!
            </Typography>

            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: "80vw", marginBottom: "50px" }}>
        <CardActionArea>
          <CardMedia
            onClick={() => {
              window.open("https://mindify.onrender.com");
            }}
            component="img"
            height="140"
            image={mindify}
            alt="mindify logo"
          />{" "}
        </CardActionArea>
        <CardHeader title="Mindify"></CardHeader> <Divider />
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              window.open("https://github.com/chazcurlee/back-end-prj3");
            }}
          >
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://mindify.onrender.com");
            }}
          >
            <WebIcon></WebIcon>
          </IconButton>
          <ExpandMore
            expand={expandedMind}
            onClick={() => setExpandedMind(!expandedMind)}
            aria-expanded={expandedMind}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedMind} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              A wellness app that allows for teachers to post expert advice
              ranging from diet, to exercise, to mental health advice. Allows
              for userrs to post questions, view teacher's schedules for future
              classes, and more!
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: "80vw", marginBottom: "50px" }}>
        <CardActionArea>
          <CardMedia
            onClick={() => {
              window.open("https://dnd-bot-discord.herokuapp.com/home");
            }}
            component="img"
            height="140"
            image={dndbot}
            alt="dnd bot logo"
          />{" "}
        </CardActionArea>
        <CardHeader title="DNDbot"></CardHeader> <Divider />
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              window.open("https://github.com/chazcurlee/dndbot-front");
            }}
          >
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://dnd-bot-discord.herokuapp.com/home");
            }}
          >
            <WebIcon></WebIcon>
          </IconButton>
          <ExpandMore
            expand={expandedDnd}
            onClick={() => setExpandedDnd(!expandedDnd)}
            aria-expanded={expandedDnd}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedDnd} timeout="auto" unmountOnExit>
          <CardContent sx={{ wordWrap: "break-word" }}>
            <Typography paragraph>
              Soon to be home to the DNDbot, a discord bot built to connect the
              DND5E API to discord for ease of access to queries in rules and
              definitions for the Dungeons and Dragons Fifth Edition TTRPG.
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: "80vw", marginBottom: "50px" }}>
        <CardActionArea>
          <CardMedia
            onClick={() => {
              window.open("https://letterle.surge.sh/");
            }}
            component="img"
            height="140"
            image={letterle}
            alt="letterle logo"
          />{" "}
        </CardActionArea>
        <CardHeader title="Letterle"></CardHeader> <Divider />
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              window.open("https://github.com/chazcurlee/Wordle-Project");
            }}
          >
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://letterle.surge.sh/");
            }}
          >
            <WebIcon></WebIcon>
          </IconButton>
          <ExpandMore
            expand={expandedLetter}
            onClick={() => setExpandedLetter(!expandedLetter)}
            aria-expanded={expandedLetter}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedLetter} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              A fun Wordle clone made with only HTML/CSS/Javascript!
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Projects;
