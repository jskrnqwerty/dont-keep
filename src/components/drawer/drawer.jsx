import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
//component imports
import DrawerList from "./DrawerList";
import DrawerHeader from "./DrawerHeader";
import { DrawerStateContext } from "../context/DrawerStateProvider";

export const drawerWidth = 275;

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
  // to keep the drawer layer underneath the header layer
  zIndex: 2,
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
  // handles drawer status which is then used by the HeaderBar sitting at <Home />
  const { open } = useContext(DrawerStateContext);

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerStyled
        variant="permanent"
        open={open}
      >
        <DrawerHeader />
        <DrawerList />
      </DrawerStyled>
    </Box>
  );
};

export default Drawer;
