//import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, Navigate } from "react-router-dom";
import Axios from "axios";
//import "./Login.css";


const Login = (props) => {
  const theme = createTheme();

  const { isAuth, setIsAuth } = useContext(AuthContext);
  const emptyCreds = { emailInput: "", passwordInput: "" };
  const errorMessage = "Invalid email address or password.";
  const [formData, setFormData] = useState(emptyCreds);
  const [credsAreInvalid, setCredsAreInvalid] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputCreds = {
      email: formData.emailInput,
      password: formData.passwordInput,
    };
    login(inputCreds);
    setFormData(emptyCreds);
  };

  const login = (loginCreds) => {
    Axios.post("/api/users/login", loginCreds)
      .then((user) => {
        console.log("login response ", user);
        setIsAuth(true);
      })
      .catch((err) => {
        setCredsAreInvalid(errorMessage);
        console.log(err);
      });
  };

  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />

            <p className="text-danger">{credsAreInvalid}</p>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;