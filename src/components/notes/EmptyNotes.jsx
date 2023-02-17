import { LightbulbOutlined as LightbulbIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const EmptyNotes = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        mt: "16vh",
      }}
    >
      <LightbulbIcon
        sx={{ fontSize: "7rem", margin: "auto", color: "#E0E0E0" }}
      />
      <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
        Notes you create appear here
      </Typography>
    </Box>
  );
};

export default EmptyNotes;
