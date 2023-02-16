import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Box, ClickAwayListener, TextField } from "@mui/material";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { v4 as uuid } from "uuid";

const TextFieldStyled = styled(TextField)`
  padding: 0.5rem 1rem;
`;

const CreateNote = () => {
  // currNote is being read in the Notes component.
  const { setCurrNote } = useContext(NotesDataContext);
  const [showTitle, setShowTitle] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteInfo, setNoteInfo] = useState("");
  const note = { id: uuid(), title: noteTitle, info: noteInfo };

  const handleClickAway = () => {
    setShowTitle(false);
    if (noteTitle || noteInfo) {
      // console.log("note Inside handleClickAway: ", note);
      setCurrNote(note);
      // console.log("currNote Inside handleClickAway: ", currNote);
      resetInputFields();
      // console.log("note Inside handleClickAway after resetInputFields(): ", note);
    }
  };

  const resetInputFields = () => {
    setNoteTitle("");
    setNoteInfo("");
  };

  const handleTitleInput = (e) => {
    setNoteTitle(e.target.value);
    // console.log("Title field hit");
  };

  const handleInfoInput = (e) => {
    setNoteInfo(e.target.value);
    // console.log("Info field hit");
  };

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
            value={noteTitle}
          />
        )}
        <TextFieldStyled
          id="note-field"
          variant="standard"
          placeholder="Take a note..."
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
