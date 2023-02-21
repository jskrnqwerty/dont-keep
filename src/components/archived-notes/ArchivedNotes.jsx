import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { Box, Grid } from "@mui/material";
import NoteCardTemplate from "../templates/NoteCardTemplate";
import EmptyNotesTemplate from "../templates/EmptyNotesTemplate";

const ArchivedNotes = () => {
  const { archivedNotes } = useContext(NotesDataContext);

  return (
    <Box
      id="notes-grid-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        mt: "80px",
        marginX: "30px",
        padding: "10px",
      }}
    >
      <Grid container>
        {archivedNotes.length > 0 ? (
          archivedNotes.map((notesItem) => (
            <NoteCardTemplate
              notesItem={notesItem}
              destination="archive"
            />
          ))
        ) : (
          <EmptyNotesTemplate destination="archive" />
        )}
      </Grid>
    </Box>
  );
};

export default ArchivedNotes;

// destination prop takes in notes, reminders, edit-labels, archive, bin
