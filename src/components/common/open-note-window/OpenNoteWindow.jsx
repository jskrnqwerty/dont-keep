import { useContext, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

const OpenNoteWindow = ({
  notesItem,
  isNoteOpen,
  setIsNoteOpen,
  displayIn,
}) => {
  const { notes, setNotes, destinationOptions } = useContext(NotesDataContext);
  const noteTitleRef = useRef(null);
  const noteInfoRef = useRef(null);

  const handleClose = () => {
    setIsNoteOpen(false);
    notesItem.title = noteTitleRef.current.innerText;
    notesItem.info = noteInfoRef.current.innerText;

    //update the note in notes[]
    let _notes = [...notes];
    _notes.map((item) => {
      if (item.id === notesItem.id) {
        item.title = notesItem.title;
        item.info = notesItem.info;
      }
      return _notes;
    });
    setNotes(_notes);
  };

  return (
    <>
      <Dialog
        open={isNoteOpen}
        onClose={handleClose}
        sx={{}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: { xs: 400, sm: 500, md: 600, lg: 600, xl: 600 },
            maxWidth: "600px",
          }}
        >
          <DialogContent
            // disablePortal={false}
            sx={{
              m: 0,
              p: 0,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <DialogContentText
              ref={noteTitleRef}
              contentEditable={
                displayIn === destinationOptions.bin ? false : true
              }
              sx={{
                px: "1rem",
                pt: "0.8rem",
                pb: "0.5rem",

                fontSize: "1.3rem",
                color: "black",
                lineHeight: "1.8rem",
                outline: "none",
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.title}
            </DialogContentText>
            <DialogContentText
              autoFocus
              ref={noteInfoRef}
              contentEditable={
                displayIn !== destinationOptions.bin ? true : false
              }
              sx={{
                px: "1rem",
                py: "0.2rem",
                color: "black",
                outline: "none",
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.info}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{}}>
            <Button
              variant="text"
              onClick={handleClose}
              sx={{ color: "black" }}
            >
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default OpenNoteWindow;
