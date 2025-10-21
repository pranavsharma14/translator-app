import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#5eead4', mb: 3 }}>
        Break Language Barriers
      </Typography>
      <Typography variant="h6" sx={{ color: '#d1d5db', mb: 5 }}>
        Translate text instantly into multiple languages with our easy-to-use web app.
      </Typography>
      <Button 
        variant="contained"
        sx={{
          backgroundColor: '#5eead4',
          color: '#16222a',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#4b6b8b' }
        }}
        onClick={() => navigate('/signup')}
      >
        Start Translating
      </Button>
    </Container>
  );
}

export default HeroSection;
