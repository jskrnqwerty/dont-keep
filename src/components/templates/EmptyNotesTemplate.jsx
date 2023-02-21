import { Box, Typography, Stack } from "@mui/material";
import {
  LightbulbOutlined as LightbulbIcon,
  NotificationsNoneOutlined as RemindersIcon,
  CreateOutlined as EditLabelsIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";

// destination prop takes in notes, reminders, edit-labels, archive, bin
const EmptyNotesTemplate = ({ destination }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        // marginTop:
        //   destination === "notes"
        //     ? "16vh"
        //     : destination === "bin"
        //     ? "26vh"
        //     : "36vh",
        marginX: "auto",
      }}
    >
      {/* Empty Notes */}
      {destination === "notes" && (
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
      {destination === "reminders" && (
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
      {destination === "edit-labels" && (
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
      {destination === "archive" && (
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
      {destination === "bin" && (
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
