import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NoteCardTemplate from "../templates/NoteCardTemplate";
import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { Box, Typography } from "@mui/material";

const PinnedNotes = () => {
  const { pinnedNotes } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "70px",
      }}
    >
      <Typography
        fontSize="0.7rem"
        letterSpacing="0.05rem"
        paddingLeft="1.5rem"
        marginBottom="0.5rem"
        sx={{ color: "grey", pb: "3px" }}
      >
        PINNED
      </Typography>
      <Grid2
        container
        gap={1.5}
      >
        {pinnedNotes.map((notesItem, index) => (
          <Grid2
            item
            key={index}
            maxWidth="240px"
            // onClick={() => <EditNoteCard notesItem={notesItem} />}
          >
            <NoteCardTemplate
              notesItem={notesItem}
              destination="notes"
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default PinnedNotes;
