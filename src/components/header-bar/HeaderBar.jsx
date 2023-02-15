import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  // or just enter zIndex: 1200
  zIndex: theme.zIndex.drawer + 1,
}));

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
          edge="start"
          sx={{
            marginRight: 1,
            // ...(open && { display: "" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          Keep
        </Typography>
      </Toolbar>
    </HeaderBarStyled>
  );
};

export default HeaderBar;
