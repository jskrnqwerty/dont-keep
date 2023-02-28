import { createContext, useState } from "react";

export const NotesDataContext = createContext(null);

const NotesDataContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const currMode = { pinned: "pinned", unpinned: "unpinned", edit: "edit" };
  const currDestination = { notes: "notes", archive: "archive", bin: "bin" };

  return (
    <NotesDataContext.Provider
      value={{
        notes,
        setNotes,
        pinnedNotes,
        setPinnedNotes,
        archivedNotes,
        setArchivedNotes,
        deletedNotes,
        setDeletedNotes,
        currMode,
        currDestination,
      }}
    >
      {children}
    </NotesDataContext.Provider>
  );
};

export default NotesDataContextProvider;
