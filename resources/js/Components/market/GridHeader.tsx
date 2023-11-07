import { Card } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
export default function GridHeader() {
  return (
    <Card className="md:flex justify-between py-3 px-2 rounded-lg my-5 hidden">
      <p className="text-lg font-semibold"># Rank</p>
      <p className="text-lg font-semibold">Artist</p>
      <p className="text-lg font-semibold">Change %</p>
      <p className="text-lg font-semibold">
        Stock Price
        <UnfoldMoreIcon />
      </p>
      <p className="text-lg font-semibold">
        Market Value
        <UnfoldMoreIcon />
      </p>
      <p className="text-lg font-semibold">
        Dividends
        <UnfoldMoreIcon />
      </p>
      <p className="text-lg font-semibold">Trade</p>
      <ErrorOutlineIcon />
    </Card>
  );
}
