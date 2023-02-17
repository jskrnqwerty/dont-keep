import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MUI imports
import { Box } from "@mui/material";
// components imports
import { DrawerStateContext } from "./context/DrawerStateProvider";
import HeaderBar from "./header-bar/HeaderBar";
import Drawer from "./drawer/Drawer";
import Notes from "./notes/Notes";
import ArchivedNotes from "./archived-notes/ArchivedNotes";
import DeletedNotes from "./deleted-notes/DeletedNotes";

const Home = () => {
  const { open, handleDrawerToggle } = useContext(DrawerStateContext);
  return (
    <Router>
      <Box
        id="div1-header-and-everything-else"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <HeaderBar
          open={open}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Box
        id="div2-drawer-and-everything-else"
        sx={{ display: "flex", flexDirection: "row", mx: 2, mt: 10 }}
      >
        <Drawer id="div3-drawer" />
        <Box
        // id="div4-create-note-and-saved-notes"
        // sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   flexGrow: 1,
        //   mt: "20px",
        // }}
        >
          {/* <Box id="div5-create-note-fields"> */}
          {/* <CreateNote /> */}
          {/* </Box> */}
          <Box
            id="div6-saved-notes"
            sx={{
              display: "flex",
              mt: "50px",
              // flexDirection: "row",
              // minWidth: "100%",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<Notes />}
              />
              <Route
                path="/archive"
                element={<ArchivedNotes />}
              />
              <Route
                path="/bin"
                element={<DeletedNotes />}
              />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default Home;
