import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ open, setOpen }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: !open ? "space-between" : "flex-end" }}>
        {/* Sidebar Toggle Button */}

        {!open && <IconButton onClick={() => setOpen(!open)} edge="start">
          <MenuIcon />
        </IconButton>}
       

        {/* Circles Container */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Half Black, Half White Circle */}
          <Box
            sx={{
              width: { xs: 10, sm: 20 },
              height: { xs: 10, sm: 20 },
              borderRadius: "50%",
              background: "linear-gradient(to right, black 50%, white 50%)",
              border: "1px solid black",
            }}
          />

          {/* Image Circle */}
          <Box
            sx={{
              width: { xs: 30, sm: 50 },
              height: { xs: 30, sm: 50 },
              borderRadius: "50%",
              backgroundImage: "url(/images/Logo.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
