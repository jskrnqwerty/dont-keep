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

const ArchivedNoteCard = ({ noteItem }) => {
  const { setNotes, deletedNotes, setDeletedNotes } =
    useContext(NotesDataContext);

  const handleDeleteForeverButton = (noteItem) => {
    removeFromDeletedNotes(noteItem);
  };

  const handleRestoreButton = (noteItem) => {
    setNotes((prev) => [...prev, noteItem]);
    removeFromDeletedNotes(noteItem);
  };

  const removeFromDeletedNotes = (noteItem) => {
    const updatedDeletedNotes = deletedNotes.filter(
      (item) => item !== noteItem
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
        <Typography gutterBottom>{noteItem.title}</Typography>
        <Typography color="text.secondary">{noteItem.info}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleDeleteForeverButton(noteItem)}>
          <Tooltip title="Delete Forever">
            <DeleteForeverIcon fontSize="small" />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => handleRestoreButton(noteItem)}>
          <Tooltip title="Restore">
            <RestoreIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Box>
  );
};

export default ArchivedNoteCard;
