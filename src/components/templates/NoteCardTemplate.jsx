import { useContext, useState } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
  UnarchiveOutlined as UnarchiveIcon,
  DeleteForeverOutlined as DeleteForeverIcon,
  RestoreFromTrashOutlined as RestoreIcon,
  PushPin as UnpinIcon,
  PushPinOutlined as PinIcon,
} from "@mui/icons-material";
import EditNoteWindow from "../edit-note-window/EditNoteWindow";

// destination prop takes in notes, reminders, edit-labels, archive, bin
const NoteCardTemplate = ({ notesItem, destination }) => {
  const [isCardActionsVisible, setIsCardActionsVisible] = useState(false);
  const [openNote, setOpenNote] = useState(false);

  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    setArchivedNotes,
    archivedNotes,
    deletedNotes,
    setDeletedNotes,
  } = useContext(NotesDataContext);

  // NotesNoteCard functions
  const handleArchiveButton = (notesItem) => {
    setArchivedNotes((prev) => [notesItem, ...prev]);
    if (!notesItem.isNotePinned) {
      removeFromNotes(notesItem);
    } else {
      removeFromPinnedNotes(notesItem);
      notesItem.isNotePinned = false;
    }
  };

  const handleDeleteButtonInNotes = (notesItem) => {
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

  // PinnedNotes functions
  const handlePinNoteButton = (notesItem) => {
    setPinnedNotes([notesItem, ...pinnedNotes]);
    removeFromNotes(notesItem);
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = true;
  };

  const handleUnpinNoteButton = (noteItem) => {
    removeFromPinnedNotes(noteItem);
    setNotes([notesItem, ...notes]);
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = false;
  };

  const removeFromPinnedNotes = (noteItem) => {
    const updatedPinnedNotes = pinnedNotes.filter((item) => item !== noteItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  // ArchivedNoteCard functions
  const handleUnarchiveButton = (notesItem) => {
    setNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const handleDeleteButtonInArchive = (notesItem) => {
    setDeletedNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const removeFromArchivedNotes = (notesItem) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item) => item !== notesItem
    );
    setArchivedNotes(updatedArchivedNotes);
  };

  // DeletedNoteCard functions
  const handleDeleteForeverButton = (notesItem) => {
    removeFromDeletedNotes(notesItem);
  };

  const handleRestoreButton = (notesItem) => {
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
    <Card
      // CardActions visible on hover
      onMouseEnter={() => setIsCardActionsVisible(true)}
      onMouseLeave={() => setIsCardActionsVisible(false)}
      onClick={() => console.log("Card clicked")}
      sx={{
        maxHeight: "100%",
        minWidth: "240px",
        outline: "1px solid #E5E5E5",
        borderRadius: "5px",
        "&: hover": {
          boxShadow: "1px 1px 5px 2px lightgrey",
        },
      }}
    >
      {destination === "notes" && (
        <CardActions
          sx={{
            display: "inline-block",
            float: "right",
            color: "grey",
            mt: "5px",
            ml: "5px",
            p: 0,
            px: "3px",
            visibility: (isCardActionsVisible && "visible") || "hidden",
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
      )}

      <CardContent
        onClick={() => {
          console.log("CardContent clicked");
          setOpenNote(true);
        }}
      >
        {notesItem.title && (
          <Typography
            gutterBottom
            id="note-title"
            px={1}
          >
            {notesItem.title}
          </Typography>
        )}
        {notesItem.info && (
          <Typography
            id="note-info"
            gutterBottom
            color="text.secondary"
            // noWrap={false}
            wordwrap="break-word"
            whiteSpace="pre-wrap"
            px={1}
          >
            {notesItem.info}
          </Typography>
        )}
      </CardContent>

      {/* The popup editable text window */}
      <EditNoteWindow
        notesItem={notesItem}
        openNote={openNote}
        setOpenNote={setOpenNote}
      />

      <CardActions
        //visible on hover
        sx={{
          visibility: (isCardActionsVisible && "visible") || "hidden",
          m: 0,
          ml: 1.4,
          p: 0,
          px: "3px",
        }}
      >
        {/* NotesNoteCard */}
        {destination === "notes" && (
          <Tooltip title="Archive">
            <IconButton onClick={() => handleArchiveButton(notesItem)}>
              <ArchiveIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {destination === "notes" && (
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteButtonInNotes(notesItem)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {/* ArchivedNoteCard */}
        {destination === "archive" && (
          <Tooltip title="Unarchive">
            <IconButton onClick={() => handleUnarchiveButton(notesItem)}>
              <UnarchiveIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {destination === "archive" && (
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteButtonInArchive(notesItem)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {/* DeletedNoteCard */}
        {destination === "bin" && (
          <Tooltip title="Delete Forever">
            <IconButton onClick={() => handleDeleteForeverButton(notesItem)}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {destination === "bin" && (
          <Tooltip title="Restore">
            <IconButton onClick={() => handleRestoreButton(notesItem)}>
              <RestoreIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};

export default NoteCardTemplate;
