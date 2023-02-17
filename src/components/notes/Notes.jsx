import { useContext } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import EmptyNotes from "./EmptyNotes";

const Notes = () => {
  const { notes, setNotes } = useContext(NotesDataContext);

  return (
    <>
      <EmptyNotes />
      {/* {if(notes) {
      }} */}
    </>
  );
};

export default Notes;
