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
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";

const NoteCard = ({ noteItem }) => {
  const { notes, setNotes, setArchivedNotes, setDeletedNotes } =
    useContext(NotesDataContext);

  const handleArchiveButton = (noteItem) => {
    setArchivedNotes((prev) => [...prev, noteItem]);
    removeFromNotes(noteItem);
  };

  const handleDeleteButton = (noteItem) => {
    console.log("Delete ", noteItem.title);
    setDeletedNotes((prev) => [...prev, noteItem]);
    removeFromNotes(noteItem);
  };

  const removeFromNotes = (noteItem) => {
    const updatedNotes = notes.filter((item) => item !== noteItem);
    setNotes(updatedNotes);
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
        <IconButton onClick={() => handleArchiveButton(noteItem)}>
          <Tooltip title="Archive">
            <ArchiveIcon fontSize="small" />
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

export default NoteCard;
