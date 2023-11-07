import { useState } from 'react';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  title: string;
  symbol?: string;
  value: number;
}

export default function PromoteBoxItem({ title, symbol, value }: Props) {
  const [val, setVal] = useState<number>(value);
  return (
    <div className="my-8">
      <p className="text-xs">{title}</p>
      <div className="flex items-center justify-center mt-4">
        <IconButton onClick={() => setVal(val - 1)}>
          <RemoveIcon />
        </IconButton>
        <div className="flex w-40 justify-center items-center">
          {symbol && <p className="text-xl font-bold mr-2">{symbol}</p>}
          <p className="text-xl font-bold">{val}</p>
        </div>
        <IconButton onClick={() => setVal(val + 1)}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
}
