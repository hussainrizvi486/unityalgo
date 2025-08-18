import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Application from './app.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Application />
      </Router>
    </HelmetProvider>
  </StrictMode>,
)
