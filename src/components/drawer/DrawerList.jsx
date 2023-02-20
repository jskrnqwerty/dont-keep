import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  LightbulbOutlined as LightBulbIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { DrawerStateContext } from "../context/DrawerStateProvider";

const drawerMenu = [
  { id: 1, name: "Notes", icon: <LightBulbIcon />, route: "/" },
  { id: 2, name: "Archive", icon: <ArchiveIcon />, route: "/archive" },
  { id: 3, name: "Bin", icon: <DeleteIcon />, route: "/bin" },
];

const DrawerList = () => {
  const { open, openHover } = useContext(DrawerStateContext);

  return (
    <List>
      {drawerMenu.map((menuItem) => (
        <ListItem
          key={menuItem.id}
          disablePadding
          sx={{ display: "block" }}
        >
          <Link
            to={menuItem.route}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open || openHover ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open || openHover ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.name}
                sx={{ opacity: open || openHover ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerList;
