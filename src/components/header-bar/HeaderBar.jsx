import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Heading from "./Heading";
import MenuToggleButton from "./MenuIconButton";
import DeleteAllNotesButton from "./DeleteAllNotesButton";
import { Box } from "@mui/system";

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
          <Box sx={{ display: "flex", width: "100%" }}>
            <MenuToggleButton />
            <Heading />
            <Box sx={{ ml: "auto" }}>
              <DeleteAllNotesButton />
            </Box>
          </Box>
        </Toolbar>
      </HeaderBarStyled>
    </>
  );
};

export default HeaderBar;
