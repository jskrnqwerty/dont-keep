import { styled } from "@mui/material/styles";

const DrawerHeaderStyled = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerHeader = ({ handleDrawerToggle }) => {
  return <DrawerHeaderStyled />;
};

export default DrawerHeader;
