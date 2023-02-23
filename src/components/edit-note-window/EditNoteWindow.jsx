import { useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const EditNoteWindow = ({ notesItem, openNote, setOpenNote }) => {
  const noteTitleRef = useRef(null);
  const noteInfoRef = useRef(null);

  const handleClose = () => {
    setOpenNote(false);
    notesItem.title = noteTitleRef.current.innerText;
    notesItem.info = noteInfoRef.current.innerText;
  };

  return (
    <Dialog
      open={openNote}
      onClose={() => handleClose()}
      sx={{
        wordBreak: "break-word",
        whiteSpace: "break-spaces",
      }}
    >
      <DialogTitle
        ref={noteTitleRef}
        contentEditable={true}
      >
        {notesItem.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          ref={noteInfoRef}
          contentEditable={true}
        >
          {notesItem.info}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          onClick={() => handleClose()}
          sx={{ color: "black" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditNoteWindow;
