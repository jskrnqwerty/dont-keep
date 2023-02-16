import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";

const HeaderBarStyled = styled(MuiAppBar)`
  background: white;
  box-shadow: 1px 1px 1px #e0e0e0;
`;

const HeaderBar = ({ open, handleDrawerToggle }) => {
  return (
    <HeaderBarStyled
      position="fixed"
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          // edge="start"
          sx={{ marginRight: 1, color: "grey" }}
        >
          <Tooltip title="Main Menu">
            <MenuIcon />
          </Tooltip>
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "grey" }}
        >
          Keep
        </Typography>
      </Toolbar>
    </HeaderBarStyled>
  );
};

export default HeaderBar;
