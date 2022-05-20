import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FeaturedPlayListRoundedIcon from "@mui/icons-material/FeaturedPlayListRounded";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import { useNavigate } from "react-router-dom";

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
  const theme = useTheme();
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
    <React.Fragment>
      <CssBaseline />

      <IconButton
        position="fixed"
        color="inherit"
        aria-label="open drawer"
      ></IconButton>
      <StyledFab
        onClick={handleClick}
        position="fixed"
        color="secondary"
        aria-label="add"
      >
        <MenuIcon />
      </StyledFab>
      <Drawer anchor="left" open={expand} onClose={() => toggleExpand(false)}>
        <div>{menuList()}</div>
      </Drawer>
    </React.Fragment>
  );
};

export default Nav;
