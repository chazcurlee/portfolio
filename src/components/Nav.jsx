import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@mui/material/styles/styled";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FeaturedPlayListRoundedIcon from "@mui/icons-material/FeaturedPlayListRounded";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import { useNavigate } from "react-router-dom";
import "../index.css";

const StyledFab = styled(Fab)({
  position: "fixed",
  zIndex: 1,
  top: "5vh",
  left: "5vw",
  right: "90vw",
  margin: "0 auto",
});

const Nav = () => {
  const navigate = useNavigate();

  const [expand, toggleExpand] = useState(false);

  const handleClick = () => {
    toggleExpand(!expand);
  };

  const menuList = () => (
    <Box sx={{ width: 250 }} onClick={handleClick}>
      <List>
        <ListItem onClick={() => navigate("/projects")}>
          <ListItemButton>
            <ListItemIcon>
              <FeaturedPlayListRoundedIcon />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem onClick={() => navigate("/about-me")}>
          <ListItemButton>
            <ListItemIcon>
              <InfoRoundedIcon />
            </ListItemIcon>
            <ListItemText>About Me</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem onClick={() => navigate("/resume")}>
          <ListItemButton>
            <ListItemIcon>
              <ArticleRoundedIcon />
            </ListItemIcon>
            <ListItemText>Resume</ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem onClick={() => navigate("/contact")}>
          <ListItemButton>
            <ListItemIcon>
              <ContactPageRoundedIcon />
            </ListItemIcon>
            <ListItemText>Contact Me</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div class="hidden">
      <CssBaseline />

      <IconButton
        position="fixed"
        color="inherit"
        aria-label="open drawer"
      ></IconButton>
      <StyledFab
        onClick={handleClick}
        position="fixed"
        // color="secondary"
        background-color="blue"
        aria-label="add"
      >
        <MenuIcon />
      </StyledFab>
      <Drawer anchor="left" open={expand} onClose={() => toggleExpand(false)}>
        <div>{menuList()}</div>
      </Drawer>
    </div>
  );
};

export default Nav;
