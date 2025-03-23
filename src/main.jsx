import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'modern-normalize';
import './index.css';

import App from './rename/App/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
