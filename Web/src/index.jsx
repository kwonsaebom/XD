import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading... </div>}>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider> 
    </React.Suspense>
  </BrowserRouter>
);
