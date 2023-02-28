import { useContext, useState } from "react";
import { NotesDataContext } from "../context/NotesDataContextProvider";
import { Typography, Card, CardContent } from "@mui/material";

import EditNoteWindow from "../open-note-window/OpenNoteWindow";
import PinNoteButton from "./note-actions/PinNoteButton";
import BottomNoteActions from "./note-actions/BottomNoteActions";

// destination prop takes in notes, reminders, edit-labels, archive, bin
const NoteCardTemplate = ({ notesItem, destination }) => {
  const [isNoteHover, setIsNoteHover] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const { destinationOptions } = useContext(NotesDataContext);

  return (
    <>
      {console.log("NoteCardTemplate returned")}
      <Card
        // CardActions visible on hover
        onMouseEnter={() => setIsNoteHover(true)}
        onMouseLeave={() => setIsNoteHover(false)}
        onClick={() => console.log("Card clicked")}
        sx={{
          maxHeight: "100%",
          minWidth: "240px",
          outline: "1px solid #E5E5E5",
          borderRadius: "5px",
          "&: hover": {
            boxShadow: "1px 1px 5px 2px lightgrey",
          },
        }}
      >
        {(destination === destinationOptions.notes ||
          destination === destinationOptions.archive) && (
          <PinNoteButton
            notesItem={notesItem}
            isNoteHover={isNoteHover}
          />
        )}

        <CardContent
          onClick={() => {
            console.log("CardContent clicked");
            setIsNoteOpen(true);
          }}
        >
          {notesItem.title && (
            <Typography
              // variant="h6"
              gutterBottom
              id="note-title"
              sx={{
                px: 1,
                color: "black",
                fontSize: "1rem",
                fontWeight: 500,
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.title}
            </Typography>
          )}
          {notesItem.info && (
            <Typography
              id="note-info"
              gutterBottom
              sx={{
                px: 1,
                color: "black",
                fontSize: "0.9rem",
                wordwrap: "break-word",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {notesItem.info}
            </Typography>
          )}
        </CardContent>
        {/* The popup editable text window */}
        <EditNoteWindow
          notesItem={notesItem}
          isNoteOpen={isNoteOpen}
          setIsNoteOpen={setIsNoteOpen}
          destination={destination}
        />
        <BottomNoteActions
          notesItem={notesItem}
          destination={destination}
          isNoteHover={isNoteHover}
        />
        {/* </CardActions> */}
      </Card>
    </>
  );
};

export default NoteCardTemplate;
