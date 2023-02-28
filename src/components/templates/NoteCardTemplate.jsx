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
} from "@mui/icons-material";
import EditNoteWindow from "../edit-note-window/EditNoteWindow";
import PinNoteButton from "./card-actions/PinNoteButton";

// destination prop takes in notes, reminders, edit-labels, archive, bin
const NoteCardTemplate = ({ notesItem, destination }) => {
  const [isNoteHover, setIsNoteHover] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const {
    notes,
    setNotes,
    pinnedNotes,
    setPinnedNotes,
    setArchivedNotes,
    archivedNotes,
    deletedNotes,
    setDeletedNotes,
    listOptions,
    destinationOptions,
  } = useContext(NotesDataContext);

  // NotesNoteCard functions
  const handleArchiveButton = (notesItem) => {
    // update currList and currDest inside notesItem
    notesItem.currList = listOptions.archive;
    notesItem.currDest = destinationOptions.archive;
    console.log(notesItem);

    setArchivedNotes((prev) => [notesItem, ...prev]);

    if (!notesItem.isNotePinned) {
      removeFromNotes(notesItem);
    } else {
      removeFromPinnedNotes(notesItem);
      notesItem.isNotePinned = false;
    }
  };

  const handleDeleteButtonInNotes = (notesItem) => {
    // update currList and currDest inside notesItem
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

  // ArchivedNoteCard functions
  const handleUnarchiveButton = (notesItem) => {
    // update currList and currDest inside notesItem
    notesItem.currList = listOptions.notes;
    notesItem.currDest = destinationOptions.notes;
    console.log(notesItem);

    setNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
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

  // DeletedNoteCard functions
  const handleDeleteForeverButton = (notesItem) => {
    removeFromDeletedNotes(notesItem);
  };

  const handleRestoreButton = (notesItem) => {
    // update currList and currDest inside notesItem
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

  // const remove = (notesItem) => {
  //   if (notesItem.currList === listOptions.notes) {
  //     const updatedNotes = notes.filter((item) => item !== notesItem);
  //     setNotes(updatedNotes);
  //   } else if (notesItem.currList === listOptions.pinned) {
  //     const updatedPinnedNotes = pinnedNotes.filter(
  //       (item) => item !== notesItem
  //     );
  //     setPinnedNotes(updatedPinnedNotes);
  //   } else if (notesItem.currList === listOptions.archive) {
  //     const updatedArchivedNotes = archivedNotes.filter(
  //       (item) => item !== notesItem
  //     );
  //     setArchivedNotes(updatedArchivedNotes);
  //   } else if (notesItem.currList === listOptions.bin) {
  //     const updatedDeletedNotes = deletedNotes.filter(
  //       (item) => item !== notesItem
  //     );
  //     setDeletedNotes(updatedDeletedNotes);
  //   }
  // };

  return (
    <>
      {console.log("NoteCardTemplate returned")}
      <Card
        // CardActions visible on hover
        onMouseEnter={() => setIsNoteHover(true)}
        onMouseLeave={() => setIsNoteHover(false)}
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
        {(destination === destinationOptions.notes ||
          destination === destinationOptions.archive) && (
          <PinNoteButton
            notesItem={notesItem}
            isNoteHover={isNoteHover}
          />
        )}

        <CardContent
          onClick={() => {
            console.log("CardContent clicked");
            setIsNoteOpen(true);
          }}
        >
          {notesItem.title && (
            <Typography
              // variant="h6"
              gutterBottom
              id="note-title"
              sx={{
                px: 1,
                color: "black",
                fontSize: "1rem",
                fontWeight: 500,
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.title}
            </Typography>
          )}
          {notesItem.info && (
            <Typography
              id="note-info"
              gutterBottom
              sx={{
                px: 1,
                color: "black",
                fontSize: "0.9rem",
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.info}
            </Typography>
          )}
        </CardContent>

        {/* The popup editable text window */}
        <EditNoteWindow
          notesItem={notesItem}
          isNoteOpen={isNoteOpen}
          setIsNoteOpen={setIsNoteOpen}
        />

        <CardActions
          //visible on hover
          sx={{
            visibility: (isNoteHover && "visible") || "hidden",
            m: 0,
            ml: 1.4,
            p: 0,
            px: "3px",
          }}
        >
          {/* NotesNoteCard */}
          {destination === destinationOptions.notes && (
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
          )}
          {destination === destinationOptions.notes && (
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeleteButtonInNotes(notesItem)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}

          {/* ArchivedNoteCard */}
          {destination === destinationOptions.archive && (
            <Tooltip title="Unarchive">
              <IconButton onClick={() => handleUnarchiveButton(notesItem)}>
                <UnarchiveIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {destination === destinationOptions.archive && (
            <Tooltip title="Delete">
              <IconButton
                onClick={() => handleDeleteButtonInArchive(notesItem)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}

          {/* DeletedNoteCard */}
          {destination === destinationOptions.bin && (
            <Tooltip title="Delete Forever">
              <IconButton onClick={() => handleDeleteForeverButton(notesItem)}>
                <DeleteForeverIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {destination === destinationOptions.bin && (
            <Tooltip title="Restore">
              <IconButton onClick={() => handleRestoreButton(notesItem)}>
                <RestoreIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default NoteCardTemplate;
