import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  LightbulbOutlined as NotesIcon,
  NotificationsNoneOutlined as RemindersIcon,
  CreateOutlined as EditLabelsIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { DrawerStateContext } from "../context/DrawerStateProvider";

const drawerMenu = [
  { id: 1, name: "Notes", icon: <NotesIcon />, route: "/", headerText: "Keep" },
  {
    id: 2,
    name: "Reminders",
    icon: <RemindersIcon />,
    route: "/reminders",
    headerText: "Reminders",
  },
  {
    id: 3,
    name: "Edit labels",
    icon: <EditLabelsIcon />,
    route: "/edit-labels",
    headerText: "Edit labels",
  },
  {
    id: 4,
    name: "Archive",
    icon: <ArchiveIcon />,
    route: "/archive",
    headerText: "Archive",
  },
  {
    id: 5,
    name: "Bin",
    icon: <DeleteIcon />,
    route: "/bin",
    headerText: "Bin",
  },
];

const DrawerList = () => {
  const { open, openHover } = useContext(DrawerStateContext);

  return (
    <List>
      {drawerMenu.map((menuItem) => (
        <ListItem
          key={menuItem.id}
          disablePadding
          sx={{
            display: "block",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
            "&:hover": { bgcolor: "#feefc3" },
          }}
        >
          <Link
            to={menuItem.route}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              disableRipple
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
