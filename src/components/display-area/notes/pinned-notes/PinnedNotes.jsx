import { useContext } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import NoteCardTemplate from "../../../templates/NoteCardTemplate";
import { NotesDataContext } from "../../../context/NotesDataContextProvider";
import { Box } from "@mui/material";
import PinnedNotesGridHeading from "../grid-headings/PinnedNotesGridHeading";
import NoteCardTemplate from "../../../common/templates/NoteCardTemplate";

const PinnedNotes = () => {
  const { pinnedNotes, destinationOptions } = useContext(NotesDataContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "70px",
      }}
    >
      <PinnedNotesGridHeading />
      <Grid2
        container
        gap={1.5}
      >
        {pinnedNotes.map((notesItem, index) => (
          <Grid2
            item
            key={index}
            maxWidth="240px"
          >
            <NoteCardTemplate
              notesItem={notesItem}
              displayIn={destinationOptions.notes}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default PinnedNotes;
