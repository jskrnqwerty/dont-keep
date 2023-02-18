import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import {
  Box,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  DeleteForeverOutlined as DeleteForeverIcon,
  RestoreFromTrashOutlined as RestoreIcon,
} from "@mui/icons-material";

const ArchivedNoteCard = ({ notesItem }) => {
  const { setNotes, deletedNotes, setDeletedNotes } =
    useContext(NotesDataContext);

  const handleDeleteForeverButton = (notesItem) => {
    removeFromDeletedNotes(notesItem);
  };

  const handleRestoreButton = (notesItem) => {
    setNotes((prev) => [...prev, notesItem]);
    removeFromDeletedNotes(notesItem);
  };

  const removeFromDeletedNotes = (notesItem) => {
    const updatedDeletedNotes = deletedNotes.filter(
      (item) => item !== notesItem
    );
    setDeletedNotes(updatedDeletedNotes);
  };

  return (
    <Box
      sx={{
        m: "0.3rem",
        width: "240px",
        outline: "1px solid lightgrey",
        borderRadius: "8px",
      }}
    >
      <CardContent>
        <Typography gutterBottom>{notesItem.title}</Typography>
        <Typography color="text.secondary">{notesItem.info}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleDeleteForeverButton(notesItem)}>
          <Tooltip title="Delete Forever">
            <DeleteForeverIcon fontSize="small" />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => handleRestoreButton(notesItem)}>
          <Tooltip title="Restore">
            <RestoreIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Box>
  );
};

export default ArchivedNoteCard;
