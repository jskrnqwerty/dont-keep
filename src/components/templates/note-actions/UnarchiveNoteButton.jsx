import { Tooltip, IconButton } from "@mui/material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { UnarchiveOutlined as UnarchiveIcon } from "@mui/icons-material";

const UnarchiveNoteButton = ({ notesItem }) => {
  const {
    setNotes,
    archivedNotes,
    setArchivedNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);

  const handleUnarchiveButton = (notesItem) => {
    notesItem.currList = listOptions.notes;
    notesItem.currDest = destinationOptions.notes;
    console.log(notesItem);

    setNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const removeFromArchivedNotes = (notesItem) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  return (
    <Tooltip title="Unarchive">
      <IconButton onClick={() => handleUnarchiveButton(notesItem)}>
        <UnarchiveIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default UnarchiveNoteButton;
