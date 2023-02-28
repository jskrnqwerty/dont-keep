import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";
import { CardActions } from "@mui/material";

import ArchiveNoteButton from "./ArchiveNoteButton";
import UnarchiveNoteButton from "./UnarchiveNoteButton";
import DeleteForeverNoteButton from "./DeleteForeverNoteButton";
import RestoreNoteButton from "./RestoreNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";

const BottomNoteActions = ({ notesItem, destination, isNoteHover }) => {
  const { destinationOptions } = useContext(NotesDataContext);

  return (
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
      {/* // NotesNoteCard */}
      {destination === destinationOptions.notes && (
        <ArchiveNoteButton notesItem={notesItem} />
      )}
      {destination === destinationOptions.notes && (
        <DeleteNoteButton
          notesItem={notesItem}
          destination={destination}
        />
      )}
      {/* // ArchivedNoteCard */}
      {destination === destinationOptions.archive && (
        <UnarchiveNoteButton notesItem={notesItem} />
      )}
      {destination === destinationOptions.archive && (
        <DeleteNoteButton
          notesItem={notesItem}
          destination={destination}
        />
      )}
      {/* // DeletedNoteCard */}
      {destination === destinationOptions.bin && (
        <DeleteForeverNoteButton notesItem={notesItem} />
      )}
      {destination === destinationOptions.bin && (
        <RestoreNoteButton notesItem={notesItem} />
      )}
    </CardActions>
  );
};

export default BottomNoteActions;
