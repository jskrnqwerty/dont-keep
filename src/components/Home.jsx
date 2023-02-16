import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MUI imports
import { Box } from "@mui/material";
// components imports
import { OpenStateContext } from "./context/OpenStateProvider";
import HeaderBar from "./header-bar/HeaderBar";
import Drawer from "./drawer/Drawer";
import Notes from "./notes/Notes";
import CreateNote from "./notes/CreateNote";
import ArchivedNotes from "./archived-notes/ArchivedNotes";
import DeletedNotes from "./deleted-notes/deletedNotes";

const Home = () => {
  const { open, handleDrawerToggle } = useContext(OpenStateContext);
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
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Drawer id="div3-drawer" />
        <Box
          id="div4-create-note-and-saved-notes"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            // alignItems: "center",
            margin: "5rem 1rem 0rem 1rem",
          }}
        >
          {/* <Box id="div5-create-note-fields"> */}
          <CreateNote />
          {/* </Box> */}
          <Box
            id="div6-saved-notes"
            sx={{
              display: "flex",
              // flexDirection: "row",
              mt: "50px",
              minWidth: "100%",
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
