import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

function FeaturesSection() {
  const features = [
    {
      title: "Multi-Language Support",
      desc: "Translate text in over 20+ languages including English, French, Hindi, Japanese, and more."
    },
    {
      title: "Audio Pronunciation",
      desc: "Listen to the pronunciation of translated text instantly (powered by gTTS)."
    },
    {
      title: "Instant Translation",
      desc: "Get real-time translation results instantly with one click."
    },
    {
      title: "Auto Language Detection",
      desc: "The app automatically detects the language of your input text."
    },
    
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#5eead4', mb: 5, textAlign: 'center' }}>
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Paper sx={{ p: 4, backgroundColor: '#1f2c3a', color: '#e0e0e0' }} elevation={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>{feature.title}</Typography>
              <Typography>{feature.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturesSection;
