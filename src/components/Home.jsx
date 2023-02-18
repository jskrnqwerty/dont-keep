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
      <HeaderBar
        open={open}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box sx={{ display: "flex" }}>
        <Drawer id="div3-drawer" />
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
