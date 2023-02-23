import { useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const EditNoteWindow = ({ notesItem, openNote, setOpenNote }) => {
  const [updatedTitle, setUpdatedTitle] = useState(notesItem.title);
  const [updatedInfo, setUpdatedInfo] = useState(notesItem.info);
  const titleRef = useRef(null);
  const infoRef = useRef(null);

  return (
    <Dialog
      open={openNote}
      onClose={() => setOpenNote(false)}
      sx={{
        wordBreak: "break-word",
        whiteSpace: "break-spaces",
      }}
      contentEditable={true}
    >
      <DialogTitle
        ref={titleRef}
        // value={updatedTitle}
        onChange={(e) => {
          setUpdatedTitle(e.target.value);
          console.log("e: ", e);
        }}
      >
        {updatedTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText ref={infoRef}>{updatedInfo}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          onClick={(e) => {
            setOpenNote(false);
            console.log("titleRef: ", titleRef);
            console.log("titleRef.current: ", titleRef.current);
            console.log("titleRef.current.value: ", titleRef.current.value);
            // setUpdatedTitle;
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditNoteWindow;
