import { createContext, useState } from "react";

export const NotesDataContext = createContext(null);

const NotesDataContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState({});
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  return (
    <NotesDataContext.Provider
      value={{
        notes,
        setNotes,
        currNote,
        setCurrNote,
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
