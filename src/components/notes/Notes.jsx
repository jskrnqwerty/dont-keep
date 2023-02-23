import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { NotesDataContext } from "../context/NotesDataContextProvider";
import CreateNote from "./CreateNote";
import NoteCardTemplate from "../templates/NoteCardTemplate";
import EmptyNotesTemplate from "../templates/EmptyNotesTemplate";
import PinnedNotes from "./PinnedNotes";
import EditNoteWindow from "../edit-note-window/EditNoteWindow";

const Notes = () => {
  const { notes, pinnedNotes } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "50px 50px auto",
        alignSelf: "center",
      }}
    >
      <CreateNote />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        {pinnedNotes.length > 0 ? <PinnedNotes /> : ""}

        {/* // display this only if any note is pinned */}
        <Typography
          fontSize="0.7rem"
          letterSpacing="0.05rem"
          paddingLeft="1.5rem"
          marginBottom="0.5rem"
          sx={{
            color: "grey",
            pb: "3px",
            display:
              pinnedNotes.length === 0 || notes.length === 0 ? "none" : "",
          }}
        >
          OTHERS
        </Typography>

        <Grid2
          container
          gap={1.5}
        >
          {notes.length > 0 ? (
            notes.map((notesItem, index) => (
              <Grid2
                item
                key={index}
                maxWidth="240px"
                onClick={() => <EditNoteWindow notesItem={notesItem} />}
                // xs={12}
                // sx={{ outline: "1px solid grey" }}
              >
                <NoteCardTemplate
                  notesItem={notesItem}
                  destination="notes"
                />
              </Grid2>
            ))
          ) : pinnedNotes.length > 0 ? (
            ""
          ) : (
            <EmptyNotesTemplate destination="notes" />
          )}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Notes;

// destination prop takes in notes, reminders, edit-labels, archive, bin
