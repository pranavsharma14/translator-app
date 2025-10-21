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
import { AccountCircleOutlined } from '@mui/icons-material';
import '@fontsource/roboto/500.css';
import Divider from '@mui/material/Divider';
import GoogleButton from 'react-google-button';

const SignupPage = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !repassword) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (password !== repassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setErrorMessage('');
    localStorage.setItem('signupData', JSON.stringify({ name, email, password }));
    navigate('/sign-in');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',p:3, background: 'linear-gradient(135deg, #283048, #4b6b8b, #16222a)' }}>
      <Paper sx={{ width: 350, padding: 4 }}>
        <Avatar sx={{ mx: 'auto', mb: 2 }}>
          <AccountCircleOutlined />
        </Avatar>
        <Typography variant="h5" align="center" gutterBottom >
          Sign Up
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom>
          Make the most of your professional life.
        </Typography>
        <form onSubmit={handleSignup}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              required
              sx={{ backgroundColor: 'white' }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
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
              value={password}
              size="small"
              onChange={(e) => setPassword(e.target.value)}
              required
              error={!!errorMessage}
              helperText={errorMessage}
              sx={{ backgroundColor: 'white' }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Re-Enter Password"
              variant="outlined"
              type="password"
              value={repassword}
              size="small"
              onChange={(e) => setRePassword(e.target.value)}
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

          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 3, mx: 8, width: 200, backgroundColor: '#4b6b8b', color: 'white', '&:hover': { backgroundColor: '#283048' } }}>
            Agree & Join
          </Button>

          <Divider sx={{ mt: 3, mb: 3 }}>or</Divider>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <GoogleButton
              style={{ borderRadius: "5px" }}
              type="light"
              onClick={() => { console.log('Google button clicked') }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, mx: 7 }}>
            <Typography variant="body2" gutterBottom >
              Already have an account ? 
              <Link href="/sign-in" variant="body2" underline="none" sx={{ color: '#4b6b8b' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignupPage;
