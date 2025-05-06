import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init("SFrnSuCiaOFQ7_n8p");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);