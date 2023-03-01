import { Tooltip, IconButton } from "@mui/material";
import {
  PushPin as UnpinIcon,
  PushPinOutlined as PinIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

const PinNoteButton = ({ notesItem }) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    archivedNotes,
    setArchivedNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);
  // currList take following values: pinned, unpinned, editNote
  // PinnedNotes functions
  const handlePinNoteButton = (notesItem) => {
    // update currList and currDest inside notesItem

    console.log("In handlePinNoteButton, currDest: ", notesItem.currDest);
    notesItem.currList = listOptions.pinned;
    // notesItem.currDest = destinationOptions.notes;
    setPinnedNotes([notesItem, ...pinnedNotes]);
    if (notesItem.currDest === destinationOptions.notes) {
      removeFromNotes(notesItem);
    }
    if (notesItem.currDest === destinationOptions.archive) {
      removeFromArchivedNotes(notesItem);
    }
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = true;
  };

  const handleUnpinNoteButton = (notesItem) => {
    // update currList and currDest inside notesItem
    notesItem.currList = listOptions.notes;
    notesItem.currDest = destinationOptions.notes;
    console.log(notesItem);
    removeFromPinnedNotes(notesItem);
    setNotes([notesItem, ...notes]);
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = false;
  };

  const removeFromNotes = (notesItem) => {
    const updatedNotes = notes.filter((item) => item !== notesItem);
    setNotes(updatedNotes);
  };

  const removeFromPinnedNotes = (notesItem) => {
    const updatedPinnedNotes = pinnedNotes.filter((item) => item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  const removeFromArchivedNotes = (notesItem) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  return (
    <>
      {!notesItem.isNotePinned && (
        <Tooltip title="Pin note">
          <IconButton onClick={() => handlePinNoteButton(notesItem)}>
            <PinIcon />
          </IconButton>
        </Tooltip>
      )}
      {notesItem.isNotePinned && (
        <Tooltip title="Unpin note">
          <IconButton onClick={() => handleUnpinNoteButton(notesItem)}>
            <UnpinIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default PinNoteButton;
