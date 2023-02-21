import { CreateOutlined as EditLabelsIcon } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";

const EmptyEditLabels = () => {
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
        <EditLabelsIcon
          sx={{ fontSize: "7rem", margin: "auto", color: "#E0E0E0" }}
        />
        <Typography sx={{ fontSize: "1.4rem", color: "#5A5A5A", mt: "1rem" }}>
          Labels you create appear here
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "#5A5A5A" }}>
          If the feature is implemented
        </Typography>
      </Stack>
    </Box>
  );
};

export default EmptyEditLabels;
