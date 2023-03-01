// import NoteCardTemplate from "../../common/templates/NoteCardTemplate";
import { useContext } from "react";
import EmptyNotesTemplate from "../../common/templates/EmptyNotesTemplate";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

const Reminders = ({ displayIn }) => {
  const { destinationOptions } = useContext(NotesDataContext);
  return (
    <>
      <EmptyNotesTemplate displayIn={destinationOptions.reminders} />
    </>
  );
};

export default Reminders;
