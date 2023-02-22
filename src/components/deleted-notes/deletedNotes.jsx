import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { Box, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import NoteCardTemplate from "../templates/NoteCardTemplate";
import EmptyNotesTemplate from "../templates/EmptyNotesTemplate";

const DeletedNotes = () => {
  const { deletedNotes } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "80px",
      }}
    >
      <Grid2
        container
        display="flex"
        gap={1.5}
        marginTop="80px"
        maxWidth="99%"
        minWidth="90%"
        alignSelf="center"
        alignItems="left"
        sx={{ marginTop: "30px", marginX: "10px", padding: "10px" }}
      >
        {deletedNotes.length > 0 ? (
          deletedNotes.map((notesItem) => (
            <Grid2
              item
              maxWidth="240px"
              // onClick={() => <EditNoteCard notesItem={notesItem} />}
              // xs={12}
            >
              <NoteCardTemplate
                notesItem={notesItem}
                destination="bin"
              />
            </Grid2>
          ))
        ) : (
          <EmptyNotesTemplate destination="bin" />
        )}
      </Grid2>
    </Box>

    // <Box
    //   id="div4-create-note-and-saved-notes"
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     flexGrow: 1,
    //     marginTop: "80px",
    //     marginX: "30px",
    //     padding: "10px",
    //   }}
    // >
    //   <Grid container>
    //     {deletedNotes.length > 0 ? (
    //       deletedNotes.map((notesItem) => (
    //         <NoteCardTemplate
    //           notesItem={notesItem}
    //           destination="bin"
    //         />
    //       ))
    //     ) : (
    //       <EmptyNotesTemplate destination="bin" />
    //     )}
    //   </Grid>
    // </Box>
  );
};

export default DeletedNotes;

// destination prop takes in notes, reminders, edit-labels, archive, bin
