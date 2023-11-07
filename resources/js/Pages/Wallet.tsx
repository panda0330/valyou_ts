import InsideLayout from '@/Layouts/InsideLayout';
import { Box, Button, IconButton, Paper } from '@mui/material';
import styled from '@emotion/styled';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import WalletItem from '@/Components/wallet/WalletItem';
import CloseIcon from '@mui/icons-material/Close';

const MainBoard = styled.div`
  background-color: #000;
`;

const MyButton = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  width: 250px;
  text-transform: uppercase;
  padding: 0px 20px;
`;

const MyPaper = styled.div`
  margin-top: 50px;
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 50px;
`;

export default function Wallet() {
  return (
    <MainBoard>
      <IconButton
        sx={{
          position: 'sticky',
          top: '10px',
          left: '97%',
          backgroundColor: '#fff',
          ':hover': { backgroundColor: '#ccc' },
        }}
        color="primary"
        href="/bank"
      >
        <CloseIcon />
      </IconButton>
      <div className="px-2 pt-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white">$ 760,000 VXD</h1>
          <p className="font-bold text-white">
            Total Balance of Assets You Own
          </p>
          <p className="font-bold text-white">
            Available Balance to Cashout: $10,000 VXD
          </p>
        </div>
        <hr className="border-2 border-dashed my-4" />
        <Button
          variant="contained"
          className="bg-green-gradient w-[280px] my-2 block"
        >
          bank/wallet
        </Button>
      </div>
      <MyPaper className="rounded-t-4xl rounded-r-4xl">
        <ScrollContainer>
          <div className="flex w-fit overflow-hidden">
            <MyButton>deposit</MyButton>
            <MyButton>send</MyButton>
            <MyButton>receive</MyButton>
            <MyButton>exchange</MyButton>
            <MyButton>personal</MyButton>
            <MyButton>Artist funds</MyButton>
            <MyButton>business</MyButton>
            <MyButton>Access tokens</MyButton>
            <MyButton>investments</MyButton>
          </div>
        </ScrollContainer>
        <ScrollContainer className="mt-20">
          <div className="flex w-fit">
            <WalletItem
              isBlack={true}
              title="Valyou X Dollars - Platform Currency"
              content="VXD: $ 56,000"
            />
            <WalletItem
              title="Valyou X Access Tokens"
              content="VXD: $ 152,000"
              desc="Token: 15,200 TokenPrice: $10"
            />
            <WalletItem
              isBlack={true}
              title="Valyou X Investments"
              content="VXD: $ 42,000"
            />
            <WalletItem title="Artist Funds" content="VXD: $ 500,000" />
            <WalletItem
              isBlack={true}
              title="Business"
              content="VXD: $ 56,000"
            />
          </div>
        </ScrollContainer>
      </MyPaper>
    </MainBoard>
  );
}
