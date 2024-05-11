import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../Static/Images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box>
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
            onClick={() => navigate("/")}
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
