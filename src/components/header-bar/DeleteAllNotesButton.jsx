import { IconButton, Tooltip } from "@mui/material";
import { useContext } from "react";
import UseAnimations from "react-useanimations";
import trash2 from "react-useanimations/lib/trash2";
// import { DeleteForeverOutlined as ClearAllIcon } from "@mui/icons-material/";
import { NotesDataContext } from "../context/NotesDataContextProvider";

const DeleteAllNotesButton = () => {
  const { setNotes, setPinnedNotes, setArchivedNotes, setDeletedNotes } =
    useContext(NotesDataContext);
  const resetApp = () => {
    setNotes([]);
    setPinnedNotes({});
    setArchivedNotes([]);
    setDeletedNotes([]);
  };

  return (
    <Tooltip title="Delete All">
      <IconButton onClick={resetApp}>
        {/* <ClearAllIcon /> */}
        <UseAnimations
          animation={trash2}
          size={24}
        />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteAllNotesButton;
