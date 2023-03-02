/**
 * HeadBar components bares the following childrem components:
 * Menu Icon button - to toggle the permanent drawer state
 * Heading - it updates dynamically based on your location in the app
 * The Delete All icons buttom to set the state of all lists to []
 */

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Heading from "./Heading";
import MenuToggleButton from "./MenuIconButton";
import DeleteAllNotesButton from "./DeleteAllNotesButton";
import { Box } from "@mui/system";
import { useState } from "react";

const HeaderBarStyled = styled(MuiAppBar)`
  background: white;
  box-shadow: 0px 0px 0px #e0e0e0;
  outline: 1px solid lightgrey;
  z-index: 1201;
`;

const HeaderBar = () => {
  const [isDeleteAll, setIsDeleteAll] = useState(false);
  return (
    <>
      <HeaderBarStyled>
        <Toolbar>
          <Box
            sx={{ display: "flex", width: "100%" }}
            onMouseEnter={() => setIsDeleteAll(true)}
            onMouseLeave={() => setIsDeleteAll(false)}
          >
            <MenuToggleButton />
            <Heading />

            <Box
              sx={{
                ml: "auto",
                visibility: isDeleteAll ? "show" : "hidden",
              }}
            >
              <DeleteAllNotesButton />
            </Box>
          </Box>
        </Toolbar>
      </HeaderBarStyled>
    </>
  );
};

export default HeaderBar;
