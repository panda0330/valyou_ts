import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MainDrawer from '@/Layouts/main/MainDrawer';
import { useState } from 'react';

export default function MainHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <MainDrawer isOpen={isDrawerOpen} sendOpenStatus={setIsDrawerOpen} />
      <AppBar
        position="static"
        sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box>
              <img src="/image/logo_black.svg" alt="valyou_header_logo" />
            </Box>
            <Box className="flex">
              <Box className="hidden md:flex">
                <Button
                  variant="outlined"
                  sx={{ fontWeight: '600', marginRight: '10px' }}
                >
                  Login/sign up
                </Button>
                <Button variant="contained" sx={{ fontWeight: '600' }}>
                  Token presale
                </Button>
              </Box>
              <Box>
                <IconButton
                  color="primary"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
