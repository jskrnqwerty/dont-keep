import { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import DrawerList from "./DrawerList";
import { MenuBookRounded } from "@mui/icons-material";

const HoverDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        bgcolor="grey"
        textAlign="center"
        aria-label="l"
        onClick={() => setIsDrawerOpen(true)}
        mx="100px"
      >
        <MenuBookRounded />
      </IconButton>
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
