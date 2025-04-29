import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GlobalStyles.css'; // Import global styles first
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

// For icons
import 'boxicons/css/boxicons.min.css'; // If you're using boxicons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);