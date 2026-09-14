import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

window.addEventListener('error', (event) => {
  if (event.error && typeof event.error === 'object') {
    console.error('Global error caught:', JSON.stringify(event.error));
  }
});

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && typeof event.reason === 'object') {
    console.error('Unhandled rejection caught:', JSON.stringify(event.reason));
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
