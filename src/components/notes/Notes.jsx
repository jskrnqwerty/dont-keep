import { useContext } from "react";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { NotesDataContext } from "../context/NotesDataContextProvider";
import CreateNote from "./CreateNote";
import EditNote from "../edit-note-card/EditNoteCard";
import NoteCardTemplate from "../templates/NoteCardTemplate";
import EmptyNotesTemplate from "../templates/EmptyNotesTemplate";

const Notes = () => {
  const { notes } = useContext(NotesDataContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <CreateNote />
      <Grid2
        container
        display="flex"
        gap={1.5}
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
              onClick={() => <EditNote notesItem={notesItem} />}
              // xs={12}
              // sm={8}
              // md={4}
              // lg={2}
              // xl={2}
              // sx={{
              //   outline: "1px solid lightgrey",
              //   borderRadius: "5px",
              // }}
            >
              <NoteCardTemplate
                notesItem={notesItem}
                destination="notes"
              />
            </Grid2>
          ))
        ) : (
          <EmptyNotesTemplate destination="notes" />
        )}
      </Grid2>
    </Box>
  );
};

export default Notes;

// destination prop takes in notes, reminders, edit-labels, archive, bin
