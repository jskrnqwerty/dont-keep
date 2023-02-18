import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyDeletedNotes from "./EmptyDeletedNotes";
import { Box, Grid } from "@mui/material";

import DeletedNoteCard from "./DeletedNoteCard";

const DeletedNotes = () => {
  const { deletedNotes } = useContext(NotesDataContext);

  return (
    <Box
      id="div4-create-note-and-saved-notes"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        marginTop: "80px",
        marginX: "30px",
        padding: "10px",
      }}
    >
      <Grid container>
        {deletedNotes.length > 0 ? (
          deletedNotes.map((notesItem) => (
            <DeletedNoteCard notesItem={notesItem} />
          ))
        ) : (
          <EmptyDeletedNotes />
        )}
      </Grid>
    </Box>
  );
};

export default DeletedNotes;
