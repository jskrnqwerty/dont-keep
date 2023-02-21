import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MUI imports
import { Box } from "@mui/material";
// components imports
import HeaderBar from "./header-bar/HeaderBar";
import Drawer from "./drawer/Drawer";
import Notes from "./notes/Notes";
import ArchivedNotes from "./archived-notes/ArchivedNotes";
import DeletedNotes from "./deleted-notes/DeletedNotes";
import HoverDrawer from "./drawer/HoverDrawer";
import { DrawerStateContext } from "./context/DrawerStateProvider";
import { useContext } from "react";

const Home = () => {
  const { open } = useContext(DrawerStateContext);
  return (
    <Router>
      <HeaderBar />
      {!open && (
        <Box
          id="hover-drawer"
          sx={{ display: "block" }}
        >
          <HoverDrawer />
        </Box>
      )}

      <Box
        id="drawer"
        sx={{ display: "flex" }}
      >
        <Drawer />
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
    </Router>
  );
};

export default Home;
