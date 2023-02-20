import { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import DrawerList from "./DrawerList";

const HoverDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <DrawerList />
          <Typography>Side panel</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default HoverDrawer;
