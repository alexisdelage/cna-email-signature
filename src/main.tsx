import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@mui/material';

import SignaturePage from './builderLayout/SignaturePage.tsx';
import getTheme from './builderLayout/shared/theme.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={getTheme('light')}>
      <SignaturePage />
    </ThemeProvider>
  </StrictMode>,
);
