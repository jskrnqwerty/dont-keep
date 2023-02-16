import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg"
        height="38px"
        alt="Keep"
        style={{ marginLeft: "5px" }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "#5A5A5A", marginLeft: "1rem" }}
      >
        Keep
      </Typography>
    </>
  );
};

export default Logo;
