import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MainDrawer from '@/Layouts/main/MainDrawer';
import { useContext, useState } from 'react';
import classNames from 'classnames';
import HeaderComboBox from './components/HeaderComboBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { AppContext } from '@/src/AppContextProvider';
import InsideDrawer from './InsideDrawer';

interface Props {
  activeTab: string;
}

// 'Bank',
//   'Market',
//   'Social Media',
//   'Watch & Earn',
//   'Listen & Earn',
//   'Store',
const tabs = [
  { link: '/bank', title: 'Bank' },
  { link: '/market', title: 'Market' },
  { link: '/socialmedia', title: 'Social Media' },
  { link: '/watch_earn', title: 'Watch & Earn' },
  { link: '/listen_earn', title: 'Listen & Earn' },
  { link: '/store', title: 'Store' },
];

export default function InsideHeader({ activeTab = 'Bank' }: Props) {
  const appContext = useContext(AppContext);

  return (
    <>
      <InsideDrawer />
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
              <a href="/">
                <img src="/image/logo_black.svg" alt="valyou_header_logo" />
              </a>
            </Box>
            <Box className="hidden lg:flex">
              {tabs.map((item) => (
                <a
                  href={item.link}
                  className={classNames('font-semibold mx-2', {
                    'color-primary': activeTab === item.title,
                    'color-main': activeTab != item.title,
                  })}
                >
                  {item.title}
                </a>
              ))}
            </Box>
            <HeaderComboBox />
            <Box className="flex">
              <Box className="hidden md:flex items-center">
                <IconButton
                  size="small"
                  sx={{
                    border: '1px solid #000',
                    width: '30px',
                    height: '30px',
                    marginRight: '10px',
                  }}
                  href="/wallet"
                >
                  <AccountBalanceWalletIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    border: '1px solid #000',
                    width: '30px',
                    height: '30px',
                  }}
                  href="/message"
                >
                  <MailOutlineIcon fontSize="inherit" />
                </IconButton>
                <Box className="flex items-center px-3 py-1 rounded-full shadow ml-2">
                  <IconButton
                    size="small"
                    sx={{
                      border: '1px solid #000',
                      width: '30px',
                      height: '30px',
                    }}
                    onClick={() => appContext?.setAccountSwitcherStatus(true)}
                  >
                    <HeadphonesIcon fontSize="inherit" />
                  </IconButton>
                  <Typography
                    className="color-primary capitalize"
                    sx={{ marginLeft: '15px' }}
                  >
                    {appContext?.activeAccountType}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton
                  color="primary"
                  onClick={() => appContext?.setInsideDrawerStatus(true)}
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
