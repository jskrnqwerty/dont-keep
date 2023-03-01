import { Tooltip, IconButton } from "@mui/material";
import { ArchiveOutlined as ArchiveIcon } from "@mui/icons-material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

const ArchiveNoteButton = ({ notesItem }) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    setArchivedNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);

  const handleArchiveButton = (notesItem) => {
    // update currList and currDest inside notesItem
    notesItem.currList = listOptions.archive;
    notesItem.currDest = destinationOptions.archive;
    setArchivedNotes((prev) => [notesItem, ...prev]);
    if (!notesItem.isNotePinned) {
      removeFromNotes(notesItem);
    } else {
      removeFromPinnedNotes(notesItem);
      notesItem.isNotePinned = false;
    }
    console.log("handleArchiveButton", notesItem);
  };
  const removeFromNotes = (notesItem) => {
    const updatedNotes = notes.filter((item) => item !== notesItem);
    setNotes(updatedNotes);
  };

  const removeFromPinnedNotes = (notesItem) => {
    const updatedPinnedNotes = pinnedNotes.filter((item) => item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  return (
    <Tooltip title="Archive">
      <IconButton
        onClick={() => {
          console.log("notesItem.currList: ", notesItem.currList);
          handleArchiveButton(notesItem);
        }}
      >
        <ArchiveIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default ArchiveNoteButton;
