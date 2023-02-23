import { createContext, useState } from "react";

export const NotesDataContext = createContext(null);

const NotesDataContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

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
      }}
    >
      {children}
    </NotesDataContext.Provider>
  );
};

export default NotesDataContextProvider;
