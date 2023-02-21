import { DeleteOutline as DeleteIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const EmptyDeletedNotes = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        mt: "26vh",
      }}
    >
      <DeleteIcon sx={{ fontSize: "7rem", margin: "auto", color: "#E0E0E0" }} />
      <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
        No notes in Recycle Bin
      </Typography>
    </Box>
  );
};

export default EmptyDeletedNotes;
