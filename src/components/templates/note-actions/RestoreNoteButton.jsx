import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Tooltip, IconButton } from "@mui/material";
import { RestoreFromTrashOutlined as RestoreIcon } from "@mui/icons-material";

const RestoreNoteButton = ({ notesItem }) => {
  const {
    setNotes,
    deletedNotes,
    setDeletedNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);

  const handleRestoreButton = (notesItem) => {
    notesItem.currList = listOptions.notes;
    notesItem.currDest = destinationOptions.notes;
    console.log(notesItem);

    setNotes((prev) => [notesItem, ...prev]);
    removeFromDeletedNotes(notesItem);
  };

  const removeFromDeletedNotes = (notesItem) => {
    const updatedDeletedNotes = deletedNotes.filter(
      (item) => item !== notesItem
    );
    setDeletedNotes(updatedDeletedNotes);
  };

  return (
    <Tooltip title="Restore">
      <IconButton onClick={() => handleRestoreButton(notesItem)}>
        <RestoreIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default RestoreNoteButton;
