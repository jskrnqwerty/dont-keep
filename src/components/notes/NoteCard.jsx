import { useContext } from "react";
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
} from "@mui/icons-material";

const NoteCard = ({ notesItem }) => {
  const { notes, setNotes, setArchivedNotes, setDeletedNotes } =
    useContext(NotesDataContext);

  const handleArchiveButton = (notesItem) => {
    setArchivedNotes((prev) => [...prev, notesItem]);
    removeFromNotes(notesItem);
  };

  const handleDeleteButton = (notesItem) => {
    console.log("Delete ", notesItem.title);
    setDeletedNotes((prev) => [...prev, notesItem]);
    removeFromNotes(notesItem);
  };

  const removeFromNotes = (notesItem) => {
    const updatedNotes = notes.filter((item) => item !== notesItem);
    setNotes(updatedNotes);
  };

  return (
    <Card
      sx={{
        maxHeight: "100%",
        minWidth: "240px",
        outline: "1px solid lightgrey",
        borderRadius: "5px",
        "&: hover": {
          boxShadow: "1px 1px 5px 2px lightgrey",
        },
      }}
    >
      <CardContent>
        {notesItem.title && (
          <Typography gutterBottom>{notesItem.title}</Typography>
        )}
        <Typography
          color="text.secondary"
          noWrap="false"
        >
          {notesItem.info}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleArchiveButton(notesItem)}>
          <Tooltip title="Archive">
            <ArchiveIcon fontSize="small" />
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => handleDeleteButton(notesItem)}>
          <Tooltip title="Delete">
            <DeleteIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default NoteCard;
