import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Paper,
  Avatar,
  Alert,
  Box,
  Link,
} from '@mui/material';
import '@fontsource/roboto/500.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Divider from '@mui/material/Divider';
import GoogleButton from 'react-google-button';

const storedSignupData = JSON.parse(localStorage.getItem('signupData')) || {};

const SigninPage = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!storedSignupData.email || !storedSignupData.password) {
      setErrorMessage('No signup data found. Please sign up first.');
      return;
    }

    if (email !== storedSignupData.email || password !== storedSignupData.password) {
      setErrorMessage('Email or password incorrect.');
      return;
    }

    setErrorMessage('');
    navigate('/translate');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #283048, #4b6b8b, #16222a)' }}>
      <Paper sx={{ width: 300, padding: 4 }}>
        <Avatar sx={{ mx: 'auto', mb: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align="center" gutterBottom >
          Sign in
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom >
          Stay updated on your professional World.
        </Typography>
        <form onSubmit={handleLogin}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              required
              error={!!errorMessage}
              helperText={errorMessage}
              sx={{ backgroundColor: 'white' }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              required
              error={!!errorMessage}
              helperText={errorMessage}
              sx={{ backgroundColor: 'white' }}
            />
          </FormControl>

          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}

          <div style={{ marginInline: "50px", marginBlock: "20px" }}>
            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ backgroundColor: '#4b6b8b', color: 'white', '&:hover': { backgroundColor: '#283048' } }}>
              Sign in
            </Button>
          </div>

          <Divider sx={{ mt: 3, mb: 3 }}>or</Divider>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleButton
              style={{ borderRadius: "5px" }}
              type="light"
              onClick={() => { console.log('Google button clicked') }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, mx: 5 }}>
            <Typography variant="body2" gutterBottom>
              New to Translator App? 
              <Link href="/signup" variant="body2" underline="none" sx={{ color: '#4b6b8b' }}>
                Join Now
              </Link>
            </Typography>
          </Box>

        </form>
      </Paper>
    </Box>
  );
};

export default SigninPage;