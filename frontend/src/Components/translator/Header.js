import React from 'react';
import { Typography, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar
      sx={{
        mb: 4,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Instant Translation
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
