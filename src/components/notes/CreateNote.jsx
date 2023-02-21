import { useState, useContext, useRef } from "react";
import styled from "@emotion/styled";
import { Box, ClickAwayListener, TextField, Stack } from "@mui/material";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { v4 as uuid } from "uuid";

const TextFieldStyled = styled(TextField)`
  padding: 0.5rem 1rem;
  width: "100%;
`;

const CreateNote = () => {
  const { notes, setNotes } = useContext(NotesDataContext);
  const [showTitle, setShowTitle] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteInfo, setNoteInfo] = useState("");
  const note = { id: uuid(), title: noteTitle, info: noteInfo };
  const ref = useRef(null);

  const handleClickAway = () => {
    setShowTitle(false);
    if (noteTitle || noteInfo) {
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
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        id="div5-create-note-fields"
        sx={{ mx: 2.5 }}
      >
        <Stack
          margin="auto"
          sx={{
            maxWidth: "600px",
            borderRadius: 2,
            boxShadow: "0px 1px 4px 1px #5A5A5A5A",
            mt: "95px",
            mx: "auto",
            alignSelf: "center",
          }}
        >
          {showTitle && (
            <TextFieldStyled
              id="title-field"
              variant="standard"
              placeholder="Title"
              InputProps={{ disableUnderline: true }}
              onChange={handleTitleInput}
              value={noteTitle}
              // onKeyDown={(e) => handleEnterKeyPress(e)}
              // Title field is multiline but focus switches to note body when Enter is hit
              multiline
            />
          )}
          <TextFieldStyled
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
          />
        </Stack>
      </Box>
    </ClickAwayListener>
  );
};

export default CreateNote;
