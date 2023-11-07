import { Box, Button, Card } from '@mui/material';
import styled from '@emotion/styled';
import DepositCard from './DepositCard';
import { useState } from 'react';
import PayCard from './PayCard';

const StyledLink = styled.a`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 80px;
  display: block;
  :hover {
    color: #ff0093;
  }
`;

export default function Investment() {
  const [isDepositCardOpen, setIsDepositCardOpen] = useState<boolean>(false);
  const [isPayCardOpen, setIsPayCardOpen] = useState(false);

  return (
    <>
      <Card className="text-center">
        <p className="text-4xl font-bold my-20">$ 999,293.0757 VXD</p>
        <StyledLink href="#">
          TOTAL VALUE OF YOUR ARTIST'S INVESTMENT PORTFOLIO
        </StyledLink>
      </Card>
      {isPayCardOpen && <PayCard />}
      <Box>
        <Button
          fullWidth
          variant="contained"
          sx={{ margin: '30px 0px', color: '#fff', fontWeight: '600' }}
        >
          transaction & earning history
        </Button>
      </Box>
    </>
  );
}
