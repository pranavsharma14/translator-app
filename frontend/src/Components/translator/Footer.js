// src/Footer.js
import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          variant="h6"
          sx={{
            m: 1,
            color: '#5eead4' // Light teal for contrast against the dark background
          }}
        >
          Language Translator App
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#d1d5db' // Soft gray for better readability on dark background
          }}
        >
          With the help of our website, we are trying to give you a seamless experience of translating your sentences into different languages.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8' // Light grayish blue for subtlety and contrast
          }}
        >
          Copyright {'© '} {' '}
          {new Date().getFullYear()} Translator
          {'.'}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8' // Same as above for consistency
          }}
        >
          Designed by Pranav Sharma
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
