import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const Heading = () => {
  const location = useLocation();
  const headings = [
    { pathname: "/", headingText: "Keep" },
    { pathname: "/reminders", headingText: "Reminders" },
    { pathname: "/edit-labels", headingText: "Edit labels" },
    { pathname: "/archive", headingText: "Archive" },
    { pathname: "/bin", headingText: "Bin" },
  ];
  return (
    <>
      {headings.map((headingsItem) =>
        headingsItem.pathname === location.pathname ? (
          <>
            {headingsItem.pathname === "/" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg"
                height="38px"
                alt="Keep"
                style={{ marginLeft: "5px" }}
              />
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#5A5A5A", marginLeft: "1rem" }}
            >
              {headingsItem.headingText}
            </Typography>
          </>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Heading;
