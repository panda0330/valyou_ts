import InsideLayout from '@/Layouts/InsideLayout';
import * as React from 'react';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Header from '@/Components/message/components/Header';
import MyMessages from '@/Components/message/components/MyMessages';

import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          400: '#ff0093',
        },
      },
    },
  },
});

export default function Message() {
  return (
    <InsideLayout>
      <CssVarsProvider disableTransitionOnChange theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Header />
          <Box component="main" className="MainContent" sx={{ flex: 1 }}>
            <MyMessages />
          </Box>
        </Box>
      </CssVarsProvider>
    </InsideLayout>
  );
}
