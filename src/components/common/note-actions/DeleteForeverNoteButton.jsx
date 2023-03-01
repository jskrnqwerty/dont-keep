import { Tooltip, IconButton } from "@mui/material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { DeleteForeverOutlined as DeleteForeverIcon } from "@mui/icons-material";

const DeleteForeverNoteButton = ({ notesItem }) => {
  const { deletedNotes, setDeletedNotes } = useContext(NotesDataContext);

  const handleDeleteForeverButton = (notesItem) => {
    removeFromDeletedNotes(notesItem);
  };
  const removeFromDeletedNotes = (notesItem) => {
    const updatedDeletedNotes = deletedNotes.filter(
      (item) => item !== notesItem
    );
    setDeletedNotes(updatedDeletedNotes);
  };

  return (
    <Tooltip title="Delete Forever">
      <IconButton onClick={() => handleDeleteForeverButton(notesItem)}>
        <DeleteForeverIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteForeverNoteButton;
