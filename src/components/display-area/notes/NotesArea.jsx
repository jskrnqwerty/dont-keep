import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Box } from "@mui/material";
import PinnedNotes from "./pinned-notes/PinnedNotes";
import OtherNotesGridHeading from "./grid-headings/OtherNotesGridHeading";
import NotesGrid from "./NotesGrid.jsx";

const NotesArea = () => {
  const { pinnedNotes } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      {pinnedNotes.length > 0 ? <PinnedNotes /> : ""}
      <OtherNotesGridHeading />
      <NotesGrid />
    </Box>
  );
};

export default NotesArea;
