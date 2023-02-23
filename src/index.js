import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

let theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
    typography: {
        fontFamily: ['Plus Jakarta Sans']
    }
  });

  theme = responsiveFontSizes(theme, {

  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>

);



