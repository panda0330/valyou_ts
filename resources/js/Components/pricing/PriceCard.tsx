import { Button } from '@mui/material';

interface Props {
  title: string;
  price: string;
  tokenNum: string;
  desc: string;
}

export default function PriceCard({ title, price, tokenNum, desc }: Props) {
  return (
    <div className="box-shadow text-center p-8 flex flex-col gap-4 w-full md:w-1/4 rounded-lg">
      <p className="font-bold capitalize">{title}</p>
      <p className="font-bold text-3xl">{price}</p>
      <p>{tokenNum} Valyou X Tokens</p>
      <p>{desc}</p>
      <Button
        color="secondary"
        variant="contained"
        fullWidth
        sx={{ fontWeight: '600' }}
      >
        Presale
      </Button>
    </div>
  );
}
