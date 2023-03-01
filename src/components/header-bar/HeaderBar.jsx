import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Heading from "./Heading";
import MenuToggleButton from "./MenuIconButton";

const HeaderBarStyled = styled(MuiAppBar)`
  background: white;
  box-shadow: 0px 0px 0px #e0e0e0;
  outline: 1px solid lightgrey;
  z-index: 1201;
`;

const HeaderBar = () => {
  return (
    <>
      <HeaderBarStyled position="fixed">
        <Toolbar>
          <MenuToggleButton />
          <Heading />
        </Toolbar>
      </HeaderBarStyled>
    </>
  );
};

export default HeaderBar;
