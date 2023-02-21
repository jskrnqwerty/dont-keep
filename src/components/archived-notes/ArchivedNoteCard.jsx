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

const ArchivedNoteCard = ({ notesItem }) => {
  const { setNotes, archivedNotes, setArchivedNotes, setDeletedNotes } =
    useContext(NotesDataContext);

  const handleUnarchiveButton = (notesItem) => {
    setNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const handleDeleteButton = (notesItem) => {
    setDeletedNotes((prev) => [notesItem, ...prev]);
    removeFromArchivedNotes(notesItem);
  };

  const removeFromArchivedNotes = (notesItem) => {
    const updatedArchivedNotes = archivedNotes.filter(
      (item) => item !== notesItem
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
        <Typography gutterBottom>{notesItem.title}</Typography>
        <Typography color="text.secondary">{notesItem.info}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleUnarchiveButton(notesItem)}>
          <Tooltip title="Unarchive">
            <UnarchiveIcon fontSize="small" />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => handleDeleteButton(notesItem)}>
          <Tooltip title="Delete">
            <DeleteIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Box>
  );
};

export default ArchivedNoteCard;
