import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface Props {
  isOpen: boolean;
  sendOpenStatus: (data: boolean) => void;
}

export default function MainDrawer({ isOpen = false, sendOpenStatus }: Props) {
  return (
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClick={() => sendOpenStatus(!isOpen)}
    >
      <Box className="p-4 w-72">
        <img
          src="/image/logo_black.svg"
          alt="drawer_logo"
          style={{ width: '70%' }}
        />
        <List className="mt-6">
          <ListItemButton>
            <a href="/" className="text-lg font-bold">
              Home
            </a>
          </ListItemButton>
          <ListItemButton>
            <a href="/market" className="text-lg font-bold">
              Market
            </a>
          </ListItemButton>
          <ListItemButton>
            <a href="/pricing" className="text-lg font-bold">
              Token Presale
            </a>
          </ListItemButton>
          <ListItemButton>
            <a href="/login" className="text-lg font-bold">
              Login / Sign up
            </a>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
