import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyArchivedNotes from "./EmptyArchivedNotes";
import { Box, Grid } from "@mui/material";
import NoteCardTemplate from "../common/NoteCardTemplate";

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
              type="archived-note-card"
            />
          ))
        ) : (
          <EmptyArchivedNotes />
        )}
      </Grid>
    </Box>
  );
};

export default ArchivedNotes;
