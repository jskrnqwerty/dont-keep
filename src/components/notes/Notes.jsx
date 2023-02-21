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
        display="flex"
        gap={2}
        sx={{ marginTop: "30px", marginX: "10px", padding: "10px" }}
        maxWidth="99%"
        minWidth="90%"
        alignSelf="center"
        alignItems="left"
      >
        {notes.length > 0 ? (
          notes.map((notesItem) => (
            <Grid2
              item
              maxWidth="240px"
              // xs={12}
              // sm={8}
              // md={4}
              // lg={2}
              // xl={2}
              sx={{
                outline: "1px solid lightgrey",
                borderRadius: "5px",
              }}
            >
              <NoteCard notesItem={notesItem} />
            </Grid2>
          ))
        ) : (
          <EmptyNotes />
        )}
      </Grid2>
    </Box>
  );
};

export default Notes;
