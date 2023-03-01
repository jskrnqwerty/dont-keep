import { useState, useContext, useRef } from "react";
import { Box, ClickAwayListener, TextField, Stack } from "@mui/material";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

const CreateNote = () => {
  const {
    note,
    noteTitle,
    setNoteTitle,
    noteInfo,
    setNoteInfo,
    notes,
    setNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);
  const [showTitle, setShowTitle] = useState(false);
  const ref = useRef(null);

  const handleClickAway = () => {
    setShowTitle(false);
    if (noteTitle || noteInfo) {
      note.currList = listOptions.notes;
      note.currDest = destinationOptions.notes;
      setNotes([note, ...notes]);
      resetInputFields();
    }
  };

  const resetInputFields = () => {
    setNoteTitle("");
    setNoteInfo("");
  };

  const handleTitleInput = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleInfoInput = (e) => {
    setNoteInfo(e.target.value);
  };

  // shift focus to noteInfo field when enter is pressed
  // will work on this later
  // const handleEnterKeyPress = (e) => {
  //   const keyPressed = e.key;
  //   keyPressed === "Enter"
  //     ? ref.current.focus()
  //     : console.log(e.key, " pressed");
  // };

  return (
    <Box id="div5-create-note-fields">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Stack
          margin="auto"
          sx={{
            maxWidth: "600px",
            borderRadius: 2,
            boxShadow: "0px 1px 4px 1px #5A5A5A5A",
            mt: "50px",
            mx: "auto",
            alignSelf: "center",
          }}
        >
          {showTitle && (
            <TextField
              id="title-field"
              variant="standard"
              placeholder="Title"
              InputProps={{ disableUnderline: true }}
              onChange={handleTitleInput}
              value={noteTitle}
              // onKeyDown={(e) => handleEnterKeyPress(e)}
              // Title field is multiline but focus should switche to note body when Enter is hit
              multiline
              sx={{ padding: "0.4rem 1rem", fontSize: "1rem" }}
            />
          )}
          <TextField
            id="note-field"
            variant="standard"
            placeholder="Take a note..."
            ref={ref}
            InputProps={{ disableUnderline: true }}
            onClick={() => setShowTitle(true)}
            onChange={handleInfoInput}
            value={noteInfo}
            autoFocus
            multiline
            sx={{ padding: "0.4rem 1rem", fontSize: "3rem" }}
          />
        </Stack>
      </ClickAwayListener>
    </Box>
  );
};

export default CreateNote;
