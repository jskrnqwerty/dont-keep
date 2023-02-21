import { ArchiveOutlined as ArchiveIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const EmptyArchivedNotes = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        mt: "26vh",
      }}
    >
      <ArchiveIcon
        sx={{ fontSize: "7rem", margin: "auto", color: "#E0E0E0" }}
      />
      <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
        Your archived notes appear here
      </Typography>
    </Box>
  );
};

export default EmptyArchivedNotes;
