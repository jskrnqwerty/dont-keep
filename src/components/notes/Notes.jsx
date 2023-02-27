import { Box } from "@mui/material";
import CreateNote from "./CreateNote";
import NotesArea from "./NotesArea";

const Notes = () => {
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
      <NotesArea />
    </Box>
  );
};

export default Notes;
