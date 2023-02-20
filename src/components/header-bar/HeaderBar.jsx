import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";
import Logo from "./Logo";
import { useContext } from "react";
import { DrawerStateContext } from "../context/DrawerStateProvider";

const HeaderBarStyled = styled(MuiAppBar)`
  background: white;
  box-shadow: 0px 0px 0px #e0e0e0;
  outline: 1px solid lightgrey;
  z-index: 1201;
`;

const HeaderBar = () => {
  const { handleDrawerToggle } = useContext(DrawerStateContext);

  return (
    <>
      <HeaderBarStyled position="fixed">
        <Toolbar>
          <IconButton
            color="#5A5A5A"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ marginRight: 1, color: "#5A5A5A" }}
          >
            <Tooltip title="Main Menu">
              <MenuIcon />
            </Tooltip>
          </IconButton>
          <Logo />
        </Toolbar>
      </HeaderBarStyled>
    </>
  );
};

export default HeaderBar;
