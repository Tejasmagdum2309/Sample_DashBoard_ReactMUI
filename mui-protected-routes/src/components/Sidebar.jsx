import { Drawer, List, ListItem, ListItemText, Box, Typography, IconButton } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/TipsAndUpdates"; // Example icon
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240; // Sidebar width

const Sidebar = ({ open , setOpen }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#E2F2FF", // Light blue background
          padding: 2, // Internal spacing
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" , mb: 2 ,pt: 1  }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        XZAYOGN
      </Typography>

      <IconButton onClick={() => setOpen(!open)} edge="start">
          <MenuIcon />
        </IconButton>
      </Box>
      

      {/* Menu Items */}
      <List>
        {/* Upcoming */}
        <ListItem
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            mb: 1,
            "&:hover": { backgroundColor: "#f0f0f0" },
            display: "flex",
            justifyContent : "space-between"
          }}
        >
          
          <ListItemText primary="Upcoming" sx={{ fontWeight: "bold" }} />
          <LightbulbIcon sx={{ mr: 1, color: "#ff4081" }} />
        </ListItem>

        {/* New Chat */}
        <ListItem
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            mb: 4,
            "&:hover": { backgroundColor: "#f0f0f0" },
            display: "flex",
            justifyContent : "space-between"
          }}
        >
        
          <ListItemText primary="New Chat" sx={{ fontWeight: "bold" }} /> 
           <AddIcon sx={{ mr: 1, color: "black" }} />
        </ListItem>

        {/* Selected Item (My Jobs) */}
        <ListItem
          sx={{
            backgroundColor: "#1E73E8",
            color: "white",
            borderRadius: "12px",
            mb: 4,
            "&:hover": { backgroundColor: "#1565c0" },
            display: "flex",
            justifyContent : "space-between"
          }}
        >
          
          <ListItemText primary="My Jobs" sx={{ fontWeight: "bold" }} />
          <WorkIcon sx={{ mr: 1, color: "white" }} />
        </ListItem>
      </List>

      {/* Section Titles */}
      <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>Today</Typography>

      {/* Chat History Cards */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "8px",
          mb: 2,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <Typography fontSize="14px">Career switch advice?...</Typography>
      </Box>

      <Typography sx={{ fontWeight: "bold", fontSize: "14px", mt: 2, mb: 1 }}>Chat History</Typography>

      {["How to improve LinkedIn?", "Common interview Qs?", "High-paying remote jobs?", "Resume optimization?", "Career in Digital Marketing?"].map(
        (text, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "8px",
              mb: 1,
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <Typography fontSize="14px">{text}...</Typography>
          </Box>
        )
      )}
    </Drawer>
  );
};

export default Sidebar;
