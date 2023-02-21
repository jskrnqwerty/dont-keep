import { Box, Typography, Stack } from "@mui/material";
import { NotificationsNoneOutlined as RemindersIcon } from "@mui/icons-material";

const EmptyReminders = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        mt: "36vh",
        px: 5,
      }}
    >
      <Stack alignItems="center">
        <RemindersIcon
          sx={{ fontSize: "7rem", margin: "auto", color: "#E0E0E0" }}
        />
        <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
          Notes with upcoming reminders appear here
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "#5A5A5A" }}>
          If the feature is implemented
        </Typography>
      </Stack>
    </Box>
  );
};

export default EmptyReminders;
