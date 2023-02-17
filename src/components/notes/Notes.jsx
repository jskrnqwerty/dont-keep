import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyNotes from "./EmptyNotes";
import { Grid } from "@mui/material";

import NoteCard from "./NoteCard";

const Notes = () => {
  const { notes } = useContext(NotesDataContext);

  return (
    <>
      <Grid container>
        {notes.length > 0 ? (
          notes.map((noteItem) => <NoteCard noteItem={noteItem} />)
        ) : (
          <EmptyNotes />
        )}
      </Grid>
    </>
  );
};

export default Notes;
