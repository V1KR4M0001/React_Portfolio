import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GlobalStyles.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.createRoot(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);