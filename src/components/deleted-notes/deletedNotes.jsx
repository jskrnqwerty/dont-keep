import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { Box, Grid } from "@mui/material";
import NoteCardTemplate from "../templates/NoteCardTemplate";
import EmptyNotesTemplate from "../templates/EmptyNotesTemplate";

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
            <NoteCardTemplate
              notesItem={notesItem}
              destination="bin"
            />
          ))
        ) : (
          <EmptyNotesTemplate destination="bin" />
        )}
      </Grid>
    </Box>
  );
};

export default DeletedNotes;

// destination prop takes in notes, reminders, edit-labels, archive, bin
