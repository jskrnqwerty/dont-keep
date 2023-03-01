import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import { DrawerStateContext } from "../context/DrawerStateProvider";
import MenuIcon from "@mui/icons-material/Menu";

const MenuToggleButton = () => {
  const { handleDrawerToggle } = useContext(DrawerStateContext);

  return (
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
  );
};

export default MenuToggleButton;
