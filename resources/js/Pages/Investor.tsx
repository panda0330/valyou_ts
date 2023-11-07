import React from 'react';
import InsideLayout from '@/Layouts/InsideLayout';
import { AppContext } from '@/src/AppContextProvider';
import { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Following from '@/Components/investor/Following';

export default function Investor() {
  const appContext = useContext(AppContext);
  useEffect(() => {
    appContext?.setActiveAccountType('investor');
  }, []);

  const [value, setValue] = React.useState('audio');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <InsideLayout>
      <Following />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Audio Playlist"
              value="audio"
              sx={{ fontWeight: '600' }}
            />
            <Tab
              label="Video playlist"
              value="video"
              sx={{ fontWeight: '600' }}
            />
            <Tab
              label="investments"
              value="invest"
              sx={{ fontWeight: '600' }}
            />
            <Tab
              label="following you"
              value="following_you"
              sx={{ fontWeight: '600' }}
            />
            <Tab
              label="you are following"
              value="you_following"
              sx={{ fontWeight: '600' }}
            />
            <Tab
              label="rewards & earnings"
              value="rewards"
              sx={{ fontWeight: '600' }}
            />
            <Tab
              label="artist vip points"
              value="vip"
              sx={{ fontWeight: '600' }}
            />
          </TabList>
        </Box>
        <TabPanel value="audio">Item One</TabPanel>
        <TabPanel value="video">Item Two</TabPanel>
        <TabPanel value="invest">Item Three</TabPanel>
        <TabPanel value="following_you"></TabPanel>
        <TabPanel value="you_following"></TabPanel>
        <TabPanel value="rewards"></TabPanel>
        <TabPanel value="vip"></TabPanel>
      </TabContext>
    </InsideLayout>
  );
}
