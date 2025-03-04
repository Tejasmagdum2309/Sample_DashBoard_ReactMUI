import { Dialog, DialogContent, TextField, Button, Typography, Box, Divider } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={open}  maxWidth="xs" fullWidth>
      <DialogContent sx={{ textAlign: "center", p: 3 }}>
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Welcome
        </Typography>

        {/* Email Input */}
        <TextField
          fullWidth
          placeholder="Email address or phone number*"
          variant="outlined"
          sx={{
            my: 2,
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />

        {/* Continue Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#0073ff",
            color: "white",
            fontWeight: "bold",
            py: 1,
            borderRadius: "12px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#005ecb" },
          }}
        >
          Continue
        </Button>

        {/* Sign Up Link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
            Sign Up
          </Typography>
        </Typography>

        {/* OR Divider */}
        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography sx={{ mx: 1, fontSize: "12px", color: "gray" }}>OR</Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        {/* Google Sign In Button */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            py: 1,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
          onClick={() => {  navigate("/login");  handleClose(); }}
        >
          <GoogleIcon sx={{ color: "#EA4335" }} />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
