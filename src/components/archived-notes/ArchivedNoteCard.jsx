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
  UnarchiveOutlined as UnarchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";

const ArchivedNoteCard = ({ noteItem }) => {
  const { setNotes, archivedNotes, setArchivedNotes, setDeletedNotes } =
    useContext(NotesDataContext);

  const handleUnarchiveButton = (noteItem) => {
    setNotes((prev) => [...prev, noteItem]);
    removeFromArchivedNotes(noteItem);
  };

  const handleDeleteButton = (noteItem) => {
    setDeletedNotes((prev) => [...prev, noteItem]);
    removeFromArchivedNotes(noteItem);
  };

  const removeFromArchivedNotes = (noteItem) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item) => item !== noteItem
    );
    setArchivedNotes(updatedArchivedNotes);
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
        <IconButton onClick={() => handleUnarchiveButton(noteItem)}>
          <Tooltip title="Unarchive">
            <UnarchiveIcon fontSize="small" />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => handleDeleteButton(noteItem)}>
          <Tooltip title="Delete">
            <DeleteIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Box>
  );
};

export default ArchivedNoteCard;
