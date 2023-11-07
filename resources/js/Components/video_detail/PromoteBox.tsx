import { Button, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { useContext } from 'react';
import { AppContext } from '@/src/AppContextProvider';
import PromoteBoxItem from './PromoteBoxItem';
import PromotionTypeSelector from './PromotionTypeSelector';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function PromoteBox() {
  const appContext = useContext(AppContext);

  return (
    <div className="box-shadow-thin w-[29%] p-2 h-[40vw] overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center border-b">
        <p className="font-bold">Promote</p>
        <IconButton onClick={() => appContext?.setIsPromoteBoxOpen(false)}>
          <Close />
        </IconButton>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <PromoteBoxItem
          title="1. How many listeners would you like to reach?"
          value={50}
        />
        <PromoteBoxItem
          title="2. How much would you like to pay each listener per stream?"
          symbol="V$"
          value={50}
        />
        <PromoteBoxItem title="3. Total spend" symbol="V$" value={50} />
        <PromotionTypeSelector />
        <Button
          sx={{ color: '#1fbfbb', margin: '20px auto', display: 'block' }}
          className="shadow-xl"
        >
          start promotion
        </Button>
        <p className="text-center">Share</p>
        <div className="flex items-center justify-between mt-6">
          <button className="flex flex-col items-center justify-center text-xs gap-2">
            <WhatsAppIcon />
            Whatsapp
          </button>
          <button className="flex flex-col items-center justify-center text-xs gap-2">
            <FacebookIcon />
            Facebook
          </button>
          <button className="flex flex-col items-center justify-center text-xs gap-2">
            <MailOutlineIcon />
            Messages
          </button>
          <button className="flex flex-col items-center justify-center text-xs gap-2">
            <MessageIcon />
            Chat
          </button>
          <button className="flex flex-col items-center justify-center text-xs gap-2">
            <ContentCopyIcon />
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
