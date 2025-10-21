// src/TranslationResult.js
import React from 'react';
import { Typography, TextField, Box } from '@mui/material';

function TranslationResult({ translationResult, pronunciation, detectedLanguage }) {
  return (
    <Box>
      {detectedLanguage && (
        <Box mt={3}>
          <Typography
            variant="h6"
            sx={{ color: '#5eead4', fontWeight: 'bold' }} // Light teal for title
          >
            Detected Language:
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#d1d5db', mb: 2 }} // Soft gray for language text
          >
            {detectedLanguage}
          </Typography>
        </Box>
      )}

      {translationResult && (
        <Box mt={3}>
          <Typography
            variant="h5"
            sx={{ color: '#5eead4', fontWeight: 'bold' }} // Light teal for title
          >
            Translated Text:
          </Typography>
          <TextField
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            value={translationResult}
            InputProps={{
              readOnly: true,
            }}
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                color: '#e0e0e0', // Light gray text
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4b6b8b',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#5eead4', // Teal on hover
              },
            }}
          />
        </Box>
      )}

      {pronunciation ? (
        <Box mt={2}>
          <Typography
            variant="h5"
            sx={{ color: '#5eead4', fontWeight: 'bold' }} // Light teal for title
          >
            Pronunciation:
          </Typography>
          <TextField
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            value={pronunciation}
            InputProps={{
              readOnly: true,
            }}
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                color: '#e0e0e0', // Light gray for text
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4b6b8b',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#5eead4', // Teal on hover
              },
            }}
          />
        </Box>
      ) : (
        <Box mt={2} mb={2}>
          <Typography
            variant="h6"
            sx={{ color: '#5eead4', fontWeight: 'bold' }} // Light teal for title
          >
            Pronunciation:
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#94a3b8' }} // Grayish blue for secondary text
          >
            Sorry, pronunciation data is not available for this translation.
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default TranslationResult;