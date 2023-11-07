import { Box, Button, Card } from '@mui/material';
import styled from '@emotion/styled';
import DepositCard from './DepositCard';
import { useState } from 'react';
import PayCard from './PayCard';

const StyledLink = styled.a`
  font-size: 17px;
  font-weight: 600;
  :hover {
    color: #ff0093;
  }
`;

export default function Funding() {
  const [isDepositCardOpen, setIsDepositCardOpen] = useState<boolean>(false);
  const [isPayCardOpen, setIsPayCardOpen] = useState(false);

  return (
    <>
      <Card className="text-center">
        <p className="text-4xl font-bold my-20">$ 999,293.0757 VXD</p>
        <StyledLink href="#">Wallet Address</StyledLink>
        <Box className="flex flex-wrap items-center justify-between md:mx-7 mt-4 mb-16">
          <Button
            className="bg-gradient-to-r from-[#fd4680] to-[#fea75c] hover:shadow-lg"
            onClick={() => setIsPayCardOpen(!isPayCardOpen)}
            sx={{
              color: '#fff',
              width: 'calc(100% / 3 - 10px)',
              fontWeight: '600',
            }}
          >
            send
          </Button>
          <Button
            className="bg-gradient-to-l from-[#1db8ba] to-[#28f0c0] hover:shadow-lg"
            onClick={() => setIsPayCardOpen(!isPayCardOpen)}
            sx={{
              color: '#fff',
              width: 'calc(100% / 3 - 10px)',
              fontWeight: '600',
            }}
          >
            receive
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsPayCardOpen(!isPayCardOpen)}
            sx={{
              color: '#fff',
              width: 'calc(100% / 3 - 10px)',
              fontWeight: '600',
            }}
          >
            currency exchange
          </Button>
        </Box>
      </Card>
      {isPayCardOpen && <PayCard />}
      <Box>
        <Button
          fullWidth
          variant="contained"
          sx={{ margin: '30px 0px', color: '#fff', fontWeight: '600' }}
        >
          transactions & earning history
        </Button>
      </Box>
    </>
  );
}
