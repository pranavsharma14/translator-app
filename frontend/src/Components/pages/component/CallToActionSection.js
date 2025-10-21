import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CallToActionSection() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#5eead4', mb: 3 }}>Get Started Today</Typography>
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
        Create an Account
      </Button>
    </Container>
  );
}

export default CallToActionSection;
