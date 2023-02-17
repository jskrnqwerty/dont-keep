import { useState, useContext, useRef } from "react";
import styled from "@emotion/styled";
import { Box, ClickAwayListener, TextField } from "@mui/material";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { v4 as uuid } from "uuid";

const TextFieldStyled = styled(TextField)`
  padding: 0.5rem 1rem;
`;

const CreateNote = () => {
  // currNote is being read in the Notes component.
  const { notes, setNotes } = useContext(NotesDataContext);
  const [showTitle, setShowTitle] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteInfo, setNoteInfo] = useState("");
  const note = { id: uuid(), title: noteTitle, info: noteInfo };
  const ref = useRef(null);

  const handleClickAway = () => {
    setShowTitle(false);
    if (noteTitle || noteInfo) {
      setNotes([...notes, note]);
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
        margin="auto"
        sx={{
          borderRadius: 2,
          boxShadow: "0px 1px 4px 1px #5A5A5A5A",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minWidth: "600px",
          overflow: "hidden",
        }}
      >
        {showTitle && (
          <TextFieldStyled
            id="title-field"
            variant="standard"
            placeholder="Title"
            InputProps={{ disableUnderline: true }}
            // Title field is multiline but focus switches to note body when Enter is hit
            multiline
            onChange={handleTitleInput}
            // onKeyDown={(e) => handleEnterKeyPress(e)}
            value={noteTitle}
          />
        )}
        <TextFieldStyled
          id="note-field"
          variant="standard"
          placeholder="Take a note..."
          ref={ref}
          InputProps={{ disableUnderline: true }}
          autoFocus
          multiline
          onClick={() => setShowTitle(true)}
          onChange={handleInfoInput}
          value={noteInfo}
        />
      </Box>
    </ClickAwayListener>
  );
};

export default CreateNote;
