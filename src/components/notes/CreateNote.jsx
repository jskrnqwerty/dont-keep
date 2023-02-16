import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

const TextFieldStyled = styled(TextField)`
  padding-top: 10px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  width: 600px;
  min-width: 250px;
`;

const CreateNote = () => {
  return (
    <Box
      id="div4-create-note-and-saved-notes-div5-create-note-fields"
      sx={{
        boxShadow: "1px 1px 5px 2px #5A5A5A5A",
        borderRadius: "7px",
        display: "flex",
        flexDirection: "column",

        flexGrow: 1,
        alignItems: "center",
        margin: "auto",
        // maxWidth: "600px",
        // minWidth: "250px",
      }}
    >
      <TextFieldStyled
        variant="standard"
        placeholder="Title"
        InputProps={{ disableUnderline: true }}
        // Title field is multiline but focus switches to note body when Enter is hit
        multiline
      />
      <TextFieldStyled
        variant="standard"
        placeholder="Take a note..."
        InputProps={{ disableUnderline: true }}
        autoFocus
        multiline
      />
    </Box>
  );
};

export default CreateNote;
