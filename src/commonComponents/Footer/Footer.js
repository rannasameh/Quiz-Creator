import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { makeStyles } from "@material-ui/core/styles";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Quizzes Creator
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    minHeight: "15vh",
    alignItems: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: "auto",
        }}
      >
        <Copyright />
      </Box>
    </Box>
  );
};
export default Footer;
