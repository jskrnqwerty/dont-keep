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
  } = useContext(NotesDataContext);

  // NotesNoteCard functions
  const handleArchiveButton = (notesItem) => {
    // update currList and currDestination inside notesItem
    notesItem.currList = "archive";
    notesItem.currDestination = "archive";
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
    // update currList and currDestination inside notesItem
    notesItem.currList = "bin";
    notesItem.currDestination = "bin";
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

  // PinnedNotes functions
  const handlePinNoteButton = (notesItem) => {
    // update currList and currDestination inside notesItem
    notesItem.currList = "pinned";
    notesItem.currDestination = "notes";
    console.log(notesItem);

    setPinnedNotes([notesItem, ...pinnedNotes]);
    removeFromNotes(notesItem);
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = true;
  };

  const handleUnpinNoteButton = (noteItem) => {
    // update currList and currDestination inside notesItem
    notesItem.currList = "notes";
    notesItem.currDestination = "notes";
    console.log(notesItem);

    removeFromPinnedNotes(noteItem);
    setNotes([notesItem, ...notes]);
    // isNotePinned decides which type of pin button to show on individual note card
    notesItem.isNotePinned = false;
  };

  const removeFromPinnedNotes = (noteItem) => {
    const updatedPinnedNotes = pinnedNotes.filter((item) => item !== notesItem);
    setPinnedNotes(updatedPinnedNotes);
  };

  // ArchivedNoteCard functions
  const handleUnarchiveButton = (notesItem) => {
    // update currList and currDestination inside notesItem
    notesItem.currList = "notes";
    notesItem.currDestination = "notes";
    console.log(notesItem);

    setNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const handleDeleteButtonInArchive = (notesItem) => {
    // update currList and currDestination inside notesItem
    notesItem.currList = "bin";
    notesItem.currDestination = "bin";
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
    // update currList and currDestination inside notesItem
    notesItem.currList = "notes";
    notesItem.currDestination = "notes";
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
  //   if (notesItem.currList === "notes") {
  //     const updatedNotes = notes.filter((item) => item !== notesItem);
  //     setNotes(updatedNotes);
  //   } else if (notesItem.currList === "pinned") {
  //     const updatedPinnedNotes = pinnedNotes.filter(
  //       (item) => item !== notesItem
  //     );
  //     setPinnedNotes(updatedPinnedNotes);
  //   } else if (notesItem.currList === "archive") {
  //     const updatedArchivedNotes = archivedNotes.filter(
  //       (item) => item !== notesItem
  //     );
  //     setArchivedNotes(updatedArchivedNotes);
  //   } else if (notesItem.currList === "bin") {
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
              <IconButton
                onClick={() => handleDeleteButtonInArchive(notesItem)}
              >
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
    </>
  );
};

export default NoteCardTemplate;
