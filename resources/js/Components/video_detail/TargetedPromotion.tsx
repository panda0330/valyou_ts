import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function TargetedPromotion() {
  const [method, setMethod] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMethod(event.target.value as string);
  };
  return (
    <div className="my-4">
      <p className="text-xs mb-4">
        🎧 Targeted is a Promotional Campaign Type where by this track is
        promoted to specific investors and music listeners of your choice.
      </p>
      <p className="text-xs mb-4">
        Music fans already on or not yet on the platform can be invited to
        listen to this content / video / audio for a promotional campaign
        listeners fee.
      </p>
      <p className="text-xs mb-8">
        They will earn the set amount when they listen to it.
      </p>
      <FormControl fullWidth size="small" className="mb-6">
        <InputLabel id="promotionMethodSelector">
          Select Promotion Method
        </InputLabel>
        <Select
          labelId="promotionMethodSelector"
          value={method}
          label="Select Promotion Method"
          onChange={handleChange}
        >
          <MenuItem value={'investors'}>Investors On Valyou X</MenuItem>
          <MenuItem value={'email'}>Input Email</MenuItem>
          <MenuItem value={'number'}>Input Number</MenuItem>
        </Select>
      </FormControl>

      {method === 'investors' && (
        <FormControl fullWidth sx={{ margin: '20px 0px' }} size="small">
          <InputLabel id="promotionMethodSelector">
            Select Investors On Valyou X
          </InputLabel>
          <Select
            labelId="promotionMethodSelector"
            value={method}
            label="Select Investors On Valyou X"
            onChange={handleChange}
          >
            <MenuItem value={'investors'}>Investors On Valyou X</MenuItem>
            <MenuItem value={'email'}>Input Email</MenuItem>
            <MenuItem value={'number'}>Input Number</MenuItem>
          </Select>
        </FormControl>
      )}

      {method === 'email' && (
        <div className="my-4">
          <p className="text-sm font-bold mb-2">Promote via Email</p>
          <TextField
            fullWidth
            placeholder="Enter email"
            size="small"
            InputProps={{ sx: { borderRadius: '50px' } }}
          />
        </div>
      )}
      {method === 'number' && (
        <div className="my-4">
          <p className="text-sm font-bold mb-2">Promote via Mobile</p>
          <TextField
            fullWidth
            placeholder="Enter Mobile or paste"
            size="small"
            InputProps={{ sx: { borderRadius: '50px' } }}
          />
        </div>
      )}
    </div>
  );
}
