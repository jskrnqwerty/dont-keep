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

const Home = () => {
  return (
    <Router>
      <HeaderBar />
      <Box sx={{ display: "block" }}>
        <HoverDrawer id="hover-drawer" />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Drawer id="drawer" />

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
