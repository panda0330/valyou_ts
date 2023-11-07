import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppContextProvider from './src/AppContextProvider';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0093',
    },
    secondary: {
      main: '#ff4680',
    },
    warning: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <App {...props} />
        </ThemeProvider>
      </AppContextProvider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
