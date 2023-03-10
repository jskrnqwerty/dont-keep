import { useContext } from "react";
import { Typography } from "@mui/material";
// import NotesDataContext from "../../../context/NotesDataContextProvider";
import { NotesDataContext } from "../../../context/NotesDataContextProvider";

const OtherNotesGridHeading = () => {
  const { notes, pinnedNotes } = useContext(NotesDataContext);

  return (
    // display this only if any note is pinned
    <Typography
      fontSize="0.7rem"
      letterSpacing="0.05rem"
      paddingLeft="1.5rem"
      marginBottom="0.5rem"
      sx={{
        color: "grey",
        pb: "3px",
        display: pinnedNotes.length === 0 || notes.length === 0 ? "none" : "",
      }}
    >
      OTHERS
    </Typography>
  );
};

export default OtherNotesGridHeading;
