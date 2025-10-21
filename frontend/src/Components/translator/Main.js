import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import Header from './Header';
import TranslateForm from './TranslateForm';
import TranslationResult from './TranslationResult';
import Footer from './Footer';

function Main() {
  const [translationResult, setTranslationResult] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');

  // Language code to full name mapping
  const languageMap = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
    'pt': 'Portuguese',
    'ru': 'Russian',
    'ar': 'Arabic',
    'zh': 'Chinese',
    'ja': 'Japanese',
    'ko': 'Korean',
    'el': 'Greek',
    // Add more languages as needed
  };

  const handleTranslate = async (text, language) => {
    try {
      const response = await axios.post('http://localhost:5000/translate', {
        text_to_translate: text,
        select_language: language,
      });

      const { translation_result, pronunciation: pronunciationResult, detected_language } = response.data;

      // Use the mapping to get the full language name
      const fullLanguageName = languageMap[detected_language] || detected_language; // Default to the code if not found

      setTranslationResult(translation_result);
      setPronunciation(pronunciationResult);
      setDetectedLanguage(fullLanguageName); // Set the full language name
    } catch (error) {
      console.error("Error in translation", error);
      setTranslationResult('Error in translation');
      setPronunciation('');
      setDetectedLanguage('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #283048, #4b6b8b, #16222a)'
      }}
    >
      <Container>
        <Header />

        <TranslateForm onTranslate={handleTranslate} />

        <TranslationResult
          translationResult={translationResult}
          pronunciation={pronunciation}
          detectedLanguage={detectedLanguage} // Pass the full language name
        />
      </Container>

      <Footer />
    </Box>
  );
}

export default Main;