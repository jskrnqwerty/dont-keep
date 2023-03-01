import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { Tooltip, IconButton } from "@mui/material";
import { DeleteOutline as DeleteIcon } from "@mui/icons-material";

const DeleteNoteButton = ({ notesItem, displayIn }) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    setArchivedNotes,
    archivedNotes,
    setDeletedNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);

  const handleDeleteButtonInNotes = (notesItem) => {
    notesItem.currList = listOptions.bin;
    notesItem.currDest = destinationOptions.bin;
    console.log(notesItem);

    setDeletedNotes((prev) => [notesItem, ...prev]);
    if (!notesItem.isNotePinned) {
      removeFromNotes(notesItem);
    } else {
      removeFromPinnedNotes(notesItem);
      notesItem.isNotePinned = false;
    }
  };
  const removeFromNotes = (notesItem) => {
    const updatedNotes = notes.filter((item) => item !== notesItem);
    setNotes(updatedNotes);
  };
  const removeFromPinnedNotes = (notesItem) => {
    const updatedPinnedNotes = pinnedNotes.filter((item) => item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  const handleDeleteButtonInArchive = (notesItem) => {
    // update currList and currDest inside notesItem
    notesItem.currList = listOptions.bin;
    notesItem.currDest = destinationOptions.bin;
    console.log(notesItem);

    setDeletedNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };
  const removeFromArchivedNotes = (notesItem) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  return (
    <Tooltip title="Delete">
      <IconButton
        onClick={() =>
          displayIn === destinationOptions.notes
            ? handleDeleteButtonInNotes(notesItem)
            : handleDeleteButtonInArchive(notesItem)
        }
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteNoteButton;
