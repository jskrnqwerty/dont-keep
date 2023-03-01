import { Box, Typography, Stack } from "@mui/material";
import {
  LightbulbOutlined as LightbulbIcon,
  NotificationsNoneOutlined as RemindersIcon,
  CreateOutlined as EditLabelsIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { NotesDataContext } from "../../context/NotesDataContextProvider";

// displayIn prop takes in notes, reminders, edit-labels, archive, bin
const EmptyNotesTemplate = ({ displayIn }) => {
  const { destinationOptions } = useContext(NotesDataContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        marginX: "auto",
      }}
    >
      {/* Empty Notes */}
      {displayIn === destinationOptions.notes && (
        <Stack
          alignItems="center"
          sx={{ p: 5 }}
        >
          <LightbulbIcon
            sx={{
              fontSize: "7rem",
              margin: "auto",
              marginTop: "16vh",
              color: "#E0E0E0",
            }}
          />
          <Typography
            sx={{
              fontSize: "1.4rem",
              color: "#5A5A5A",
              mt: "1rem",
              mx: "auto",
            }}
          >
            Notes you create appear here
          </Typography>
        </Stack>
      )}

      {/* Empty Reminders */}
      {displayIn === destinationOptions.reminders && (
        <Stack
          alignItems="center"
          sx={{ p: 5 }}
        >
          <RemindersIcon
            sx={{
              fontSize: "7rem",
              margin: "auto",
              marginTop: "36vh",
              color: "#E0E0E0",
            }}
          />
          <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
            Notes with upcoming reminders appear here
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#5A5A5A" }}>
            If the feature is implemented
          </Typography>
        </Stack>
      )}

      {/* Empty Edit labels */}
      {displayIn === destinationOptions.editLabels && (
        <Stack
          alignItems="center"
          sx={{ p: 5 }}
        >
          <EditLabelsIcon
            sx={{
              fontSize: "7rem",
              margin: "auto",
              marginTop: "36vh",
              color: "#E0E0E0",
            }}
          />
          <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
            Labels you create appear here
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#5A5A5A" }}>
            If the feature is implemented
          </Typography>
        </Stack>
      )}

      {/* Empty Archive */}
      {displayIn === destinationOptions.archive && (
        <Stack
          alignItems="center"
          sx={{ p: 5 }}
        >
          <ArchiveIcon
            sx={{
              fontSize: "7rem",
              margin: "auto",
              marginTop: "26vh",
              color: "#E0E0E0",
            }}
          />
          <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
            Your archived notes appear here
          </Typography>
        </Stack>
      )}

      {/* Empty Bin */}
      {displayIn === destinationOptions.bin && (
        <Stack
          alignItems="center"
          sx={{ p: 5 }}
        >
          <DeleteIcon
            sx={{
              fontSize: "7rem",
              margin: "auto",
              marginTop: "26vh",
              color: "#E0E0E0",
            }}
          />
          <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
            No notes in Recycle Bin
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default EmptyNotesTemplate;
