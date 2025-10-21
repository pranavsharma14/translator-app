import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#16222a', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Instant Translation
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/sign-in')}>Login</Button>
          <Button color="inherit" onClick={() => navigate('/signup')}>Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
