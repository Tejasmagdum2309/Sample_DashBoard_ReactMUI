import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Login = () => {
  const { login, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Login Page</Typography>
      <Button variant="contained" onClick={login} sx={{ mt: 2 }}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
