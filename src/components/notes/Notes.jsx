import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyNotes from "./EmptyNotes";
import { Box, Grid } from "@mui/material";

import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";

const Notes = () => {
  const { notes } = useContext(NotesDataContext);

  return (
    <Box
      id="div4-create-note-and-saved-notes"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        mt: "20px",
      }}
    >
      <CreateNote />
      <Grid container>
        {notes.length > 0 ? (
          notes.map((noteItem) => <NoteCard noteItem={noteItem} />)
        ) : (
          <EmptyNotes />
        )}
      </Grid>
    </Box>
  );
};

export default Notes;
