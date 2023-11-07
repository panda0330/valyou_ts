import { Button, Card, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function PayCard() {
  return (
    <Card
      sx={{ backgroundColor: '#000', padding: '15px 10px', margin: '20px 0px' }}
    >
      <p className="text-white font-semibold text-lg mb-2">Send Money To</p>
      <FormControl fullWidth>
        <Select sx={{ backgroundColor: '#fff', marginBottom: '40px' }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <p className="text-white font-semibold text-lg mb-2">Send Amount</p>
      <TextField
        fullWidth
        type="number"
        sx={{ backgroundColor: '#fff', marginBottom: '40px' }}
      />
      <p className="text-white font-semibold text-lg mb-2">
        Select Reason For Payment
      </p>
      <FormControl fullWidth>
        <Select sx={{ backgroundColor: '#fff', marginBottom: '40px' }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <TextField
        multiline
        rows={5}
        fullWidth
        sx={{ backgroundColor: '#fff' }}
      />

      <Button
        className="bg-gradient-to-l from-[#1db8ba] to-[#28f0c0]"
        sx={{
          display: 'block',
          margin: '30px auto',
          width: '250px',
          color: '#fff',
          fontWeight: '600',
        }}
      >
        send
      </Button>
    </Card>
  );
}
