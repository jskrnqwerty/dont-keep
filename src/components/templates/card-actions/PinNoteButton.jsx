import { Tooltip, IconButton, CardActions } from "@mui/material";
import {
  PushPin as UnpinIcon,
  PushPinOutlined as PinIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

const PinNoteButton = ({ notesItem, isNoteHover }) => {
  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    archivedNotes,
    setArchivedNotes,
  } = useContext(NotesDataContext);
  // currList take following values: pinned, unpinned, editNote
  // PinnedNotes functions
  const handlePinNoteButton = (notesItem) => {
    // update currList and currDestination inside notesItem

    console.log(
      "In handlePinNoteButton, currDestination: ",
      notesItem.currDestination
    );
    notesItem.currList = "pinned";
    // notesItem.currDestination = "notes";
    setPinnedNotes([notesItem, ...pinnedNotes]);
    if (notesItem.currDestination === "notes") {
      removeFromNotes(notesItem);
    }
    if (notesItem.currDestination === "archive") {
      removeFromArchivedNotes(notesItem);
    }
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = true;
  };

  const handleUnpinNoteButton = (notesItem) => {
    // update currList and currDestination inside notesItem
    notesItem.currList = "notes";
    notesItem.currDestination = "notes";
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
    <CardActions
      sx={{
        display: "inline-block",
        float: "right",
        color: "grey",
        mt: "5px",
        ml: "5px",
        p: 0,
        px: "3px",
        visibility: (isNoteHover && "visible") || "hidden",
      }}
    >
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
    </CardActions>
  );
};

export default PinNoteButton;
