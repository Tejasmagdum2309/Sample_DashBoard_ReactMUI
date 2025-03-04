import { useAuth } from "../context/AuthContext";
import { Button, Container, Typography, Box, Paper, TextField, IconButton, Avatar } from "@mui/material";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SendIcon from "@mui/icons-material/Send";
import DashbardComponent from "../components/DashbardComponent";

const drawerWidth = 240; // Sidebar width

const Dashboard = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflowY : "hidden" ,backgroundColor: "#F8FAFC" }}>
      {/* Sidebar Component */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Right side (Main Content) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto", // Allow scrolling inside content
        }}
      >
        {/* Navbar Component */}
        <Navbar open={open} setOpen={setOpen} />

        {/* Main Container  */}
         <DashbardComponent/>
      </Box>
    </Box>
  );
};

export default Dashboard;
