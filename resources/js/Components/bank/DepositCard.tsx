import {
  Card,
  IconButton,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from '@mui/material';
import classNames from 'classnames';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  sendOpenStatus: (data: boolean) => void;
}

const buttonStyle = {
  backgroundColor: '#000',
  width: {
    xs: '100%',
    sm: 'calc(100% / 2 - 10px)',
    md: 'calc(100% / 3 - 10px)',
    lg: 'calc(100% / 6 - 5px)',
  },
  fontWeight: '600',
  margin: '5px 0px',
};

export default function DepositCard({ isOpen = false, sendOpenStatus }: Props) {
  const [method, setMethod] = useState('card');

  return (
    <>
      <Card className={classNames('my-3 pt-4 px-2 pb-2', { hidden: !isOpen })}>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Select Deposit Method</p>
          <IconButton onClick={() => sendOpenStatus(false)}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="flex justify-between items-center px-10">
          <FormControl>
            <RadioGroup
              defaultValue="card"
              name="radio-buttons-group"
              onChange={(e) => setMethod(e.target.value)}
            >
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Fiat (Debit/Credit Card)"
                color="primary"
              />
              <FormControlLabel
                value="crypto"
                control={<Radio />}
                label="Crypto"
                color="primary"
              />
            </RadioGroup>
          </FormControl>
          <div>
            <div className="flex items-center">
              <img
                className="rounded mx-1"
                src="/image/paypalimg.webp"
                alt="paypal"
              />
              <img
                className="rounded mx-1"
                src="/image/visacard.webp"
                alt="paypal"
              />
              <img
                className="rounded mx-1"
                src="/image/masterCard.webp"
                alt="paypal"
              />
              <img
                className="rounded mx-1"
                src="/image/americanCard.webp"
                alt="paypal"
              />
            </div>
            <div className="flex items-center mt-2">
              <img
                className="w-5 mr-2 ml-auto"
                src="/image/usdcoin.webp"
                alt="usdcoin"
              />
              USD Coin
            </div>
          </div>
        </div>

        {method === 'card' ? (
          <div>
            <TextField
              label="How much VXD would you like to purchase?"
              fullWidth
              sx={{ margin: '5px 0px' }}
            />
            <TextField
              label="Name on Card"
              fullWidth
              sx={{ margin: '5px 0px' }}
            />
            <TextField
              label="Card Number"
              fullWidth
              sx={{ margin: '5px 0px' }}
            />
            <div className="flex justify-between">
              <TextField
                label="Expiration"
                sx={{ margin: '5px 0px', width: 'calc(50% - 5px)' }}
              />
              <TextField
                label="CVC"
                sx={{ margin: '5px 0px', width: 'calc(50% - 5px)' }}
              />
            </div>
          </div>
        ) : null}

        {method === 'crypto' ? (
          <div>
            <FormControl fullWidth>
              <p className="font-semibold">Custom Amount</p>
              <TextField
                fullWidth
                placeholder="How much VXD would you like to purchase?"
              />
            </FormControl>

            <div className="flex flex-wrap justify-between">
              <Button variant="contained" sx={buttonStyle}>
                SELL $10 VXD
              </Button>
              <Button variant="contained" sx={buttonStyle}>
                SELL $20 VXD
              </Button>
              <Button variant="contained" sx={buttonStyle}>
                SELL $50 VXD
              </Button>
              <Button variant="contained" sx={buttonStyle}>
                SELL $100 VXD
              </Button>
              <Button variant="contained" sx={buttonStyle}>
                SELL $500 VXD
              </Button>
              <Button variant="contained" sx={buttonStyle}>
                SELL $1000 VXD
              </Button>
            </div>
          </div>
        ) : null}

        <Button
          variant="contained"
          fullWidth
          sx={{ fontWeight: '600', marginTop: '10px' }}
        >
          Buy now
        </Button>
      </Card>
    </>
  );
}
