import * as React from 'react';
import {
  Card,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

const SearchInput = styled.input`
  border: none;
  flex-grow: 1;
`;

export default function SearchBox() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        borderRadius: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 10px',
      }}
    >
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="Search for music artist brands to invest"
      />
      <IconButton
        sx={{ width: '30px', height: '30px', border: '1px solid #ccc' }}
        size="small"
      >
        <PublicIcon fontSize="small" />
      </IconButton>
      <Box className="hidden md:block md:ml-2">
        <TabContext value={value}>
          <TabList aria-label="lab API tabs example" onChange={handleChange}>
            <Tab
              label="All"
              value="1"
              sx={{ fontSize: '12px', fontWeight: '700' }}
            />
            <Tab
              label="Expression of interest"
              value="2"
              sx={{ fontSize: '12px', fontWeight: '700' }}
            />
            <Tab
              label="Upcoming"
              value="3"
              sx={{ fontSize: '12px', fontWeight: '700' }}
            />
            <Tab
              label="Professional"
              value="4"
              sx={{ fontSize: '12px', fontWeight: '700' }}
            />
            <Tab
              label="Major Artist"
              value="5"
              sx={{ fontSize: '12px', fontWeight: '700' }}
            />
          </TabList>
        </TabContext>
      </Box>
    </Card>
  );
}
