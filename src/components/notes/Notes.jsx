import { useContext } from "react";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyNotes from "./EmptyNotes";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const Notes = () => {
  const { notes } = useContext(NotesDataContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <CreateNote />
      <Grid2
        container
        gap="1px"
        sx={{ marginTop: "30px", marginX: "30px", padding: "10px" }}
      >
        {notes.length > 0 ? (
          notes.map((notesItem) => <NoteCard notesItem={notesItem} />)
        ) : (
          <EmptyNotes />
        )}
      </Grid2>
    </Box>
  );
};

export default Notes;
