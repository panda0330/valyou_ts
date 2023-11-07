import React from 'react';
import DetailCard from '@/Components/socialmedia/DetailCard';
import PostCard from '@/Components/socialmedia/PostCard';
import InsideLayout from '@/Layouts/InsideLayout';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GridItem from '@/Components/socialmedia/GridItem';

export default function SocialMedia() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <InsideLayout activeTab="Social Media">
      <div className="flex">
        <div className="w-full lg:w-3/5">
          <PostCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
        </div>
        <div className="hidden lg:flex h-[100vh] w-[40vw] pt-4 lg:ml-4 background-shadow !sticky top-0 flex-col">
          <div className="flex items-start justify-between">
            <p className="font-semibold">
              Trending Music Artists Brands in Stock Market
            </p>
            <div className="flex items-center">
              <a href="#" className="color-green flex gap-1 items-center mr-2">
                Up
                <img src="/image/greeen-arrow.svg" alt="green_arrow" />
              </a>
              <a href="#" className="color-primary flex gap-1 items-center">
                Down
                <img src="/image/down-arrow-circle.svg" alt="down_arrow" />
              </a>
            </div>
          </div>

          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                marginTop: '50px',
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="All"
                  value="1"
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                />
                <Tab
                  label="United states"
                  value="2"
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                />
                <Tab
                  label="canada"
                  value="3"
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                />
                <Tab
                  label="barbados"
                  value="4"
                  sx={{ fontSize: '14px', fontWeight: '600' }}
                />
              </TabList>
            </Box>
            {/* <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel> */}
          </TabContext>
          <div className="overflow-y-auto">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
          </div>
        </div>
      </div>
    </InsideLayout>
  );
}
