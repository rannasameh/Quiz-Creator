import Navbar from "../Navbar";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Box style={{ flex: 1 }} sx={{ pl: 5, pr: 5 }}>
        <Navbar />
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
