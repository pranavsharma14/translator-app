import React from 'react';
import { Container, Typography } from '@mui/material';

function AboutSection() {
  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#5eead4', mb: 3 }}>About the App</Typography>
      <Typography sx={{ color: '#d1d5db', maxWidth: 800, mx: 'auto' }}>
        Our Translator App is designed to help users communicate across languages effortlessly. 
        It combines a modern React interface with a powerful Flask backend to deliver accurate translations in real time.
      </Typography>
    </Container>
  );
}

export default AboutSection;
