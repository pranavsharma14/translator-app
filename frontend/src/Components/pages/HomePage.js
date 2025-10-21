import React from 'react';
import { Box } from '@mui/material';

import Footer from '../translator/Footer';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import FeaturesSection from './component/FeaturesSection';
import AboutSection from './component/AboutSection';
import CallToActionSection from './component/CallToActionSection';


function HomePage() {
  return (
    <Box sx={{ background: 'linear-gradient(135deg, #283048, #4b6b8b, #16222a)', minHeight: '100vh', color: '#e0e0e0' }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CallToActionSection />
      <Footer />
    </Box>
  );
}

export default HomePage;
