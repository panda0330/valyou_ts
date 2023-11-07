import StoreItem from '@/Components/store/StoreItem';
import InsideLayout from '@/Layouts/InsideLayout';
import { Button } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

export default function Store() {
  return (
    <InsideLayout activeTab="Store">
      <img
        src="/image/valyouXshirt.webp"
        alt="valyouXshirt.webp"
        className="block mx-auto w-60 my-10"
      />
      <Button variant="contained" fullWidth>
        purchase $ 96 <del className="ml-2">$ 100</del>
      </Button>

      <ScrollContainer className="flex">
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </ScrollContainer>
    </InsideLayout>
  );
}
