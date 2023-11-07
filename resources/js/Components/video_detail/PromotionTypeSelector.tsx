import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TargetedPromotion from './TargetedPromotion';

export default function PromotionTypeSelector() {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  return (
    <>
      <p className="text-xs mb-4">4. Select Promotion Type</p>
      <FormControl fullWidth size="small">
        <InputLabel id="promotionTypeSelector">Promotion Type</InputLabel>
        <Select
          labelId="promotionTypeSelector"
          defaultValue="opened"
          value={type}
          label="Promotion Type"
          onChange={handleChange}
        >
          <MenuItem value={'opened'}>Open promotional campaign</MenuItem>
          <MenuItem value={'targeted'}>Targeted promotional campaign</MenuItem>
        </Select>
      </FormControl>
      {type === 'targeted' && <TargetedPromotion />}
      {type === 'opened' && (
        <>
          <p className="text-xs mt-5">
            🎧 I would like to have an open campaign. Any one can listen to the
            music on my profile and get paid. The promotional campaign will end
            when the amount of listeners you selected above is reached.
          </p>
        </>
      )}
    </>
  );
}
