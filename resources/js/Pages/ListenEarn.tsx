import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InsideLayout from '@/Layouts/InsideLayout';
import {
  Avatar,
  Button,
  InputAdornment,
  Pagination,
  SxProps,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const ButtonTitles = [
  'Top 100',
  'Trending',
  'Rap',
  'Hip-Hop',
  'Afro Beats',
  'Amapiano',
  'Feel Good',
  'Party',
  'Romance',
  'Workout',
  'Chill',
  'Energy Country',
];

const TabStyle: SxProps = {
  fontWeight: '600',
};

export default function ListenEarn() {
  const [activeButton, setActiveButton] = useState<string>();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <InsideLayout activeTab="Listen & Earn">
      <ScrollContainer className="my-5">
        <div className="flex w-fit">
          {ButtonTitles.map((item) => (
            <Button
              sx={{
                textTransform: 'none',
                margin: '0px 5px',
                fontWeight: '500',
                minWidth: 'max-content',
                color: activeButton === item ? '#ff0093' : '#696969',
                backgroundColor: activeButton === item ? '#131313' : '#fff',
                paddingLeft: '20px',
                paddingRight: '20px',
                ':hover': { color: '#ff0093' },
                boxShadow:
                  'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
              }}
              onClick={() => setActiveButton(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </ScrollContainer>

      <div className="!sticky top-0 mb-10 !bg-white z-[999]">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Pay per stream" value="1" sx={TabStyle} />
                <Tab label="earn" value="2" sx={TabStyle} />
                <Tab label="valyou playlist" value="3" sx={TabStyle} />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </div>

      <TextField
        fullWidth
        size="small"
        placeholder="Search for a song"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: { borderRadius: '30px' },
        }}
      />

      <div className="overflow-x-auto relative background-shadow">
        <br />
        <table className="w-full text-sm text-left text-gray-500">
          <thead>
            <tr>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                #Rank &nbsp;
                <UnfoldMoreIcon />
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Cover &nbsp;
                  <UnfoldMoreIcon />
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Song name &nbsp;
                  <UnfoldMoreIcon />
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Artist Image &nbsp;
                  <UnfoldMoreIcon />
                </span>
              </th>
              <th scope="col" className="pt-6 whitespace-nowrap">
                <span>
                  Artist Name &nbsp;
                  <UnfoldMoreIcon />
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 whitespace-nowrap">
                <span>
                  Song Valyou &nbsp;
                  <UnfoldMoreIcon />
                </span>
              </th>
              <th scope="col" className="pt-6 px-6 text-[#FF0093]">
                <span>Pay Per Stream</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
            <tr className="border-[1px]">
              <th
                scope="row"
                className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                <span>1</span>
                <PlayCircleIcon sx={{ fontSize: '50px', marginLeft: '20px' }} />
              </th>
              <td className="px-6">
                <Avatar
                  src="/image/drake-gods-plan.jpeg"
                  sx={{
                    borderRadius: '5px',
                    width: '60px',
                    height: '60px',
                  }}
                />
              </td>
              <td className="py-4 px-6 hidden lg:block">
                Started from the bottom
              </td>
              <td className="py-4 px-6 block lg:hidden">Started from t..</td>
              <td className="px-12">
                <Avatar
                  src="/image/drakeDp.png"
                  sx={{ width: '60px', height: '60px' }}
                />
              </td>
              <td className="py-4 whitespace-nowrap">
                <p>Bobby Oparaocha</p>
              </td>
              <td className="py-4 px-6">$100,000,000.00</td>
              <td className="py-4 px-9 whitespace-nowrap">
                <Button tabIndex={0} type="button">
                  $7.002402
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <Pagination
            count={10}
            color="primary"
            shape="rounded"
            sx={{ display: 'block', margin: '20px auto' }}
          />
        </div>
      </div>
    </InsideLayout>
  );
}
