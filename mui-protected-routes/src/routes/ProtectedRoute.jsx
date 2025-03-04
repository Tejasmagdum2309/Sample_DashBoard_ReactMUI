import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import LoginModal from "../components/LoginModel";

const ProtectedRoute = () => {
  const { token, login } = useAuth();
  const [open, setOpen] = useState(!token);

  if (!token) {
    return (
      <>
        <div style={{ filter: "blur(5px)" }}>{<Outlet />}</div>
        <LoginModal open={open} handleClose={() => setOpen(false)} />
      </>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
