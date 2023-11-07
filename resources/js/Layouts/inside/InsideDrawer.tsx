import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppContext } from '@/src/AppContextProvider';
import { Avatar } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export default function InsideDrawer() {
  const appContext = React.useContext(AppContext);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Drawer
      anchor={'left'}
      open={appContext?.insideDrawerStatus}
      onClose={() => appContext?.setInsideDrawerStatus(false)}
    >
      <Box className="w-fit">
        <div className="flex p-4 bg-black items-center">
          <Avatar
            src="/image/sampleAvatar.jpg"
            sx={{ border: '4px solid #ccc', width: '50px', height: '50px' }}
          />
          <div className="ml-2">
            <p className="font-bold text-white text-sm">Bobby Oparaocha</p>
            <p className="text-xs text-white">bobbyoparaocha@gmail.com</p>
            <a className="color-primary text-xs">Verify Account ID</a>
          </div>
        </div>

        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList
              onChange={handleChange}
              TabIndicatorProps={{ sx: { color: '#fff' } }}
            >
              <Tab label="Following you" value="1" />
              <Tab label="you are following" value="2" />
            </TabList>
          </Box>
          {/* <TabPanel value="1">Following you</TabPanel>
          <TabPanel value="2">you are following</TabPanel> */}
        </TabContext>

        <div className="flex bg-black justify-between px-2 py-4">
          <div className="text-center">
            <p className="font-bold color-green">2</p>
            <p className="underline text-white text-lg">Artist</p>
          </div>
          <div className="text-center">
            <p className="font-bold color-green">100</p>
            <p className="underline text-white text-lg">Investors</p>
          </div>
          <div className="text-center">
            <p className="font-bold color-green">4</p>
            <p className="underline text-white text-lg">Business</p>
          </div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="flex items-center">
              <img
                src="/image/investor_icon.svg"
                style={{ width: '20px', marginRight: '10px' }}
              />{' '}
              Investor
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemButton>Messages</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Your Followers</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>You Are Following</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Revenue Streams</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Upload</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>My Audios</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>My Videos</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Promoted Videos</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Promoted Audios</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Connect</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Collaborate</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Artist Profile Settings</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Invite Friends / Fans</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Managed Investments</ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="flex items-center">
              <img
                src="/image/stock_market.svg"
                style={{ width: '20px', marginRight: '10px' }}
              />{' '}
              Stock Market
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemButton>All - Music Artists</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>America / Canada (North)</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Africa / Middle East</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>South / Latin America</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Asia</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Australia / Australasia</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Europe</ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="flex items-center">
              <img
                src="/image/bank_icon.svg"
                style={{ width: '20px', marginRight: '10px' }}
              />{' '}
              Bank
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemButton>Account Balance</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Deposit Withdraw</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Currency Exchange</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Buy / Sell VXD Currency</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Artist Investment Portfolio</ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <div className="flex px-4 py-3 border-t border-b">
          <img
            src="/image/newspaper.svg"
            alt=""
            style={{ width: '20px', marginRight: '10px' }}
          />
          <p className="">Social Media</p>
        </div>

        <div className="flex px-4 py-3 border-t border-b">
          <img
            src="/image/eye.svg"
            alt=""
            style={{ width: '20px', marginRight: '10px' }}
          />
          <p className="">Watch & Earn</p>
        </div>

        <div className="flex px-4 py-3 border-t border-b">
          <img
            src="/image/listen_earn.svg"
            alt=""
            style={{ width: '20px', marginRight: '10px' }}
          />
          <p className="">Listen & Earn</p>
        </div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="flex items-center">
              <img
                src="/image/store_icon.svg"
                style={{ width: '20px', marginRight: '10px' }}
              />{' '}
              Store
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemButton>Products</ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="flex items-center">
              <img
                src="/image/accounts.svg"
                style={{ width: '20px', marginRight: '10px' }}
              />{' '}
              Accounts
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemButton>Create Artist</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>My Artist</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Create Business</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>My Business</ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <div className="flex px-4 py-3 border-t border-b">
          <img
            src="/image/support.svg"
            alt=""
            style={{ width: '20px', marginRight: '10px' }}
          />
          <p className="">Support</p>
        </div>

        <div className="flex px-4 py-3 border-t border-b">
          <img
            src="/image/home.svg"
            alt=""
            style={{ width: '20px', marginRight: '10px' }}
          />
          <p className="">Home</p>
        </div>

        <div className="flex px-4 py-3 border-t border-b">
          <img
            src="/image/logout.svg"
            alt=""
            style={{ width: '20px', marginRight: '10px' }}
          />
          <p className="">Logout</p>
        </div>
      </Box>
    </Drawer>
  );
}
