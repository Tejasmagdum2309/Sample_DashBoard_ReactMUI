import React from 'react'
import { Button, Container, Typography, Box, Paper, TextField, IconButton, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


const DashbardComponent = () => {
  return (
    <Container
    maxWidth="md"
    sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      transition: "all 0.3s ease-in-out",
    }}
  >
    
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 , display: "flex", alignItems: "center",gap:2 }}>
        <Avatar src="images/Logo.jpg" alt="Xzayogn" sx={{ height: 40, width: 40 }} />  Hey, I am Xzayogn
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Message Xzayogn"
        sx={{  borderRadius: "12px", // Makes the border rounded
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px", // Applies rounded corners to the input
          },
        mb: 2,}}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SendIcon />
            </IconButton>
          ),
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
variant="outlined"
color="primary"
sx={{
fontSize: "10px",
display: "flex",
alignItems: "center",
gap: 1,
py: 0, // Remove vertical padding
px: 1, // Adjust horizontal padding
borderRadius: "9999px", // Fully rounded button
minHeight: "unset", // Prevent extra height from default styles
}}
>
<Avatar src="images/Group.png" alt="Xzayogn" sx={{ height: 15, width: 15 }} /> Jobs in gaming industry
</Button>

<Button
variant="outlined"
color="primary"
sx={{
fontSize: "10px",
display: "flex",
alignItems: "center",
gap: 1,
py: 1,
px: 1,
borderRadius: "9999px",
minHeight: "unset",
}}
>
<Avatar src="images/Visa.png" alt="Xzayogn" sx={{ height: 15, width: 15 }} /> Visa sponsored professor job in UK
</Button>

<Button
variant="outlined"
color="primary"
sx={{
fontSize: "10px",
display: "flex",
alignItems: "center",
gap: 1,
py: 0,
px: 1,
borderRadius: "9999px",
minHeight: "unset",
}}
>
<Avatar src="images/Vector.png" alt="Xzayogn" sx={{ height: 15, width: 15 }} /> LLM jobs posted in 24 hours
</Button>

      </Box>

   
  </Container>
  )
}

export default DashbardComponent