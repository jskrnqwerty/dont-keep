import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MUI imports
import { Box } from "@mui/material";
// components imports
import { DrawerStateContext } from "./context/DrawerStateProvider";
import HeaderBar from "./header-bar/HeaderBar";
import Drawer from "./drawer/Drawer";
import HoverDrawer from "./drawer/HoverDrawer";
import Notes from "./drawer-list-items/notes/Notes";
import Reminders from "./drawer-list-items/reminders/Reminders";
import EditLabels from "./drawer-list-items/edit-labels/EditLabels";
import ArchivedNotes from "./drawer-list-items/archived-notes/ArchivedNotes";
import DeletedNotes from "./drawer-list-items/deleted-notes/DeletedNotes";

const Home = () => {
  const { open } = useContext(DrawerStateContext);
  return (
    <Router>
      <HeaderBar />
      {!open && <HoverDrawer />}

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
            path="/reminders"
            element={<Reminders />}
          />
          <Route
            path="/edit-labels"
            element={<EditLabels />}
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
