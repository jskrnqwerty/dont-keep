import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
//component imports
import HeaderBar from "../header-bar/HeaderBar";
import DrawerList from "./DrawerList";
import DrawerHeader from "./DrawerHeader";

export const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar
        open={open}
        handleDrawerToggle={handleDrawerToggle}
      />

      <DrawerStyled
        variant="permanent"
        open={open}
      >
        <DrawerHeader handleDrawerToggle={handleDrawerToggle} />

        <DrawerList open={open} />
      </DrawerStyled>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />

        <Typography paragraph>CreateNotes and Notes go here.</Typography>
      </Box>
    </Box>
  );
};

export default Drawer;
