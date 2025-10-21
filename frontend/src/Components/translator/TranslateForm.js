// src/TranslateForm.js
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const languageOptions = [
  { value: 'ar', label: 'Arabic' },
  { value: 'ca', label: 'Catalan' },
  { value: 'zh-Hans', label: 'Chinese (Simplified)' },
  { value: 'zh-Hant', label: 'Chinese (Traditional)' },
  { value: 'hr', label: 'Croatian' },
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'el', label: 'Greek' },
  { value: 'he', label: 'Hebrew' },
  { value: 'hi', label: 'Hindi' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  { value: 'es', label: 'Spanish' },
  { value: 'th', label: 'Thai' },
  { value: 'tr', label: 'Turkish' },
  { value: 'vi', label: 'Vietnamese' }
  // Add other language options here
];

function TranslateForm({ onTranslate }) {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSubmit = () => {
    onTranslate(textToTranslate, selectedLanguage);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        label="Enter text to translate"
        multiline
        rows={2}
        variant="outlined"
        fullWidth
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
        sx={{
          marginTop: '90px',
          '& .MuiInputBase-root': {
            color: '#e0e0e0' // Light gray text
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4b6b8b',// Steel blue border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#5eead4', // Teal color on hover
          },
          '& .MuiInputLabel-root': {
            color: '#94a3b8', // Grayish-blue label color
          },
        }}
      />

      <TextField
        select
        label="Translate to"
        fullWidth
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        sx={{
          marginBlock: '30px',
          '& .MuiInputBase-root': {
            color: '#e0e0e0', // Light gray for dropdown text
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4b6b8b', // Steel blue border
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#5eead4', // Teal color on hover
          },
          '& .MuiInputLabel-root': {
            color: '#94a3b8', // Grayish-blue label color
          },
          '& .MuiMenuItem-root': {
            color: '#d1d5db', // Light gray for dropdown items
          },
        }}
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div style={{ marginInline: "150px", marginBlock: "30px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#5eead4', // Light teal button color
            color: '#16222a',           // Dark color for button text
            '&:hover': {
              backgroundColor: '#4b6b8b', // Steel blue on hover
            },
          }}
          fullWidth
          onClick={handleSubmit}
        >
          Translate
        </Button>
      </div>
    </Box>
  );
}

export default TranslateForm;
