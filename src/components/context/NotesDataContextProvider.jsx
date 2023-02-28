import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const NotesDataContext = createContext(null);

const NotesDataContextProvider = ({ children }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteInfo, setNoteInfo] = useState("");
  const listOptions = {
    pinned: "pinned",
    unpinned: "unpinned",
    edit: "edit",
    notes: "notes",
    archive: "archive",
    bin: "bin",
  };
  // currList used to take any of the following inputs:
  // notes, pinned, archive, bin;
  const destinationOptions = { notes: "notes", archive: "archive", bin: "bin" };
  const note = {
    id: uuid(),
    title: noteTitle,
    info: noteInfo,
    isNotePinned: false,
    isNoteUnderEdit: false,
    currList: listOptions.notes,
    currDest: destinationOptions.notes,
  };

  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  return (
    <NotesDataContext.Provider
      value={{
        note,
        noteTitle,
        setNoteTitle,
        noteInfo,
        setNoteInfo,
        notes,
        setNotes,
        pinnedNotes,
        setPinnedNotes,
        archivedNotes,
        setArchivedNotes,
        deletedNotes,
        setDeletedNotes,
        listOptions,
        destinationOptions,
      }}
    >
      {children}
    </NotesDataContext.Provider>
  );
};

export default NotesDataContextProvider;
