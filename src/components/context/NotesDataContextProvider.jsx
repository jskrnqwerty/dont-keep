import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const NotesDataContext = createContext(null);

const NotesDataContextProvider = ({ children }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteInfo, setNoteInfo] = useState("");
  const note = {
    id: uuid(),
    title: noteTitle,
    info: noteInfo,
    currList: "", //currList will take listOptions item as value
    currDest: "", //currDest will take destinationOptions item as value
    isNotePinned: false,
  };
  const listOptions = {
    pinned: "pinned",
    unpinned: "unpinned",
    edit: "edit",
    notes: "notes",
    archive: "archive",
    bin: "bin",
  };
  const destinationOptions = {
    notes: "notes",
    reminders: "reminders",
    editLabels: "editLabels",
    archive: "archive",
    bin: "bin",
  };

  const [notes, setNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  useEffect(() => {
    const localNotesData = localStorage.getItem("notesData");
    if (localNotesData) setNotes(JSON.parse(localNotesData));

    const localPinnedNotesData = localStorage.getItem("pinnedNotesData");
    if (localPinnedNotesData) setPinnedNotes(JSON.parse(localPinnedNotesData));

    const localArchivedNotesData = localStorage.getItem("archivedNotesData");
    if (localArchivedNotesData)
      setArchivedNotes(JSON.parse(localArchivedNotesData));

    const localDeletedNotesData = localStorage.getItem("deletedNotesData");
    if (localDeletedNotesData)
      setDeletedNotes(JSON.parse(localDeletedNotesData));
  }, []);

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
    localStorage.setItem("pinnedNotesData", JSON.stringify(pinnedNotes));
    localStorage.setItem("archivedNotesData", JSON.stringify(archivedNotes));
    localStorage.setItem("deletedNotesData", JSON.stringify(deletedNotes));
  });

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
