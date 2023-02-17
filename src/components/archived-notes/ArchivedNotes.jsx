import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyArchivedNotes from "./EmptyArchivedNotes";
import { Box, Grid } from "@mui/material";

import ArchivedNoteCard from "./ArchivedNoteCard";

const ArchivedNotes = () => {
  const { archivedNotes } = useContext(NotesDataContext);

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
      <Grid container>
        {archivedNotes.length > 0 ? (
          archivedNotes.map((noteItem) => (
            <ArchivedNoteCard noteItem={noteItem} />
          ))
        ) : (
          <EmptyArchivedNotes />
        )}
      </Grid>
    </Box>
  );
};

export default ArchivedNotes;
