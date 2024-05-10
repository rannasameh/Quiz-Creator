import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../Static/Images/logo.jpeg";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <Box
            item
            sx={{
              cursor: "pointer",
              alignSelf: "flex-start",
              width: { xs: "60%", md: "50%", lg: "20%" },
            }}
          >
            <img
              alt="home"
              src={logo}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
