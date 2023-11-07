import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { AppContext } from '@/src/AppContextProvider';
import { Button } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default,
}));

export default function ValyouSongDrawer(props: Props) {
  const { window } = props;

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const appContext = React.useContext(AppContext);

  const [activeVal, setActiveVal] = React.useState(1);

  return (
    <Root>
      <CssBaseline />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={appContext?.isValyouSongDrawerOpen!}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        onOpen={() => appContext?.setIsValyouSongDrawerOpen(true)}
        onClose={() => appContext?.setIsValyouSongDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="border-b">
          <p className="text-center font-bold my-6 text-xl">Valyou Song</p>
        </div>
        <p className="text-center font-semibold my-8">
          This Song Valyou: <span className="color-primary">$500.00</span>
        </p>
        <div className="flex justify-center items-center my-2">
          <button
            style={{
              borderRadius: '10000px',
              margin: '0px 5px',
              width: '50px',
              height: '50px',
            }}
            className={activeVal === 1 ? 'bg-green-gradient text-white' : ''}
            onClick={() => setActiveVal(1)}
          >
            $1
          </button>
          <button
            style={{
              borderRadius: '10000px',
              margin: '0px 5px',
              width: '50px',
              height: '50px',
            }}
            className={activeVal === 2 ? 'bg-green-gradient text-white' : ''}
            onClick={() => setActiveVal(2)}
          >
            $2
          </button>
          <button
            style={{
              borderRadius: '10000px',
              margin: '0px 5px',
              width: '50px',
              height: '50px',
            }}
            className={activeVal === 3 ? 'bg-green-gradient text-white' : ''}
            onClick={() => setActiveVal(3)}
          >
            $3
          </button>
          <button
            style={{
              borderRadius: '10000px',
              margin: '0px 5px',
              width: '50px',
              height: '50px',
            }}
            className={activeVal === 4 ? 'bg-green-gradient text-white' : ''}
            onClick={() => setActiveVal(4)}
          >
            $4
          </button>
          <button
            style={{
              borderRadius: '10000px',
              margin: '0px 5px',
              width: '50px',
              height: '50px',
            }}
            className={activeVal === 5 ? 'bg-green-gradient text-white' : ''}
            onClick={() => setActiveVal(5)}
          >
            $5
          </button>
          <HelpOutlineIcon />
        </div>
        <div className="flex gap-2 justify-center mb-6">
          <button className="bg-green-gradient uppercase w-[250px] text-white py-2 rounded">
            Add valyou
          </button>
          <button className="bg-pink-gradient uppercase w-[250px] text-white py-2 rounded">
            Cancel
          </button>
        </div>
        <div className="border-t border-b py-4">
          <p className="text-center text-[17px]">
            <HelpOutlineIcon /> Your Streaming & Song Valyou Contributions to
            this song: <span className="color-primary">$311.00</span>
          </p>
        </div>
      </SwipeableDrawer>
    </Root>
  );
}
