import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";

const Notes = () => {
  const { currNote, notes, setNotes } = useContext(NotesDataContext);
  return (
    <>
      "Notes"
      {console.log("Inside Notes.jsx", currNote)}
    </>
  );
};

export default Notes;
