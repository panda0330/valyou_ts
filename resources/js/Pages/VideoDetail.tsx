import * as React from 'react';
import Box from '@mui/material/Box';
import InsideLayout from '@/Layouts/InsideLayout';
import { Avatar, Button, SxProps, Card, useMediaQuery } from '@mui/material';
import LargeVideoCard from '@/Components/video_detail/LargeVideoCard';
import CryptoItem from '@/Components/socialmedia/CryptoItem';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import AllVideos from '@/Components/video_detail/AllVideos';
import CommentBox from '@/Components/video_detail/CommentBox';
import { AppContext } from '@/src/AppContextProvider';
import PromoteBox from '@/Components/video_detail/PromoteBox';
import ValyouSongDrawer from '@/Components/video_detail/ValyouSongDrawer';

const TabStyle: SxProps = {
  fontWeight: '600',
};

export default function VideoDetail() {
  const [value, setValue] = React.useState('1');
  const [isCommentOpen, setIsCommentOpen] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  const appContext = React.useContext(AppContext);

  return (
    <InsideLayout activeTab="Watch & Earn">
      <div className="flex justify-between my-4">
        <LargeVideoCard />

        {!appContext?.isCommentBoxOpen && !appContext?.isPromoteBoxOpen && (
          <AllVideos />
        )}
        {appContext?.isCommentBoxOpen && <CommentBox />}
        {appContext?.isPromoteBoxOpen && <PromoteBox />}
      </div>

      <Card className="px-2 py-6 flex my-8">
        <Avatar src="/image/sampleAvatar.jpg" className="mr-2" />
        <ScrollContainer>
          <div className="flex w-fit gap-2 whitespace-nowrap items-center">
            <p className="font-bold">Drake -</p>
            <div className="border border-gray-300 rounded-full px-2 py-1">
              <p className="color-primary font-semibold">
                Stock Price{' '}
                <span className="color-primary font-bold">$78.44 VXD</span>
              </p>
            </div>
            <img
              className="block w-4"
              src="/image/song-title.png"
              alt="song-title"
            />
            <div className="flex gap-2">
              <p className="text-gray-400">
                Song Title :
                <span className="font-bold"> Started From The Bottom</span>
              </p>
              <span className="text-gray-300">
                Song Valyou :
                <span className="font-bold px-1">$1,000,000,24,567</span>
              </span>
              <span className="text-gray-300">
                Artist Brand Listing Category :
                <span className="font-bold">Upcoming Artist / Rapper</span>
              </span>
            </div>
          </div>
        </ScrollContainer>
      </Card>

      {isMobile && (
        <Button
          fullWidth
          className="bg-gradient-to-r from-[#1db8ba] to-[#28f0c0]"
          variant="contained"
          sx={{
            fontWeight: '600',
            margin: '10px 0px',
          }}
        >
          invest in artist
        </Button>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">
          Drake's Brand Sponsors in{' '}
          <a href="#" className="color-primary">
            Yau Tsim Mong City
          </a>
        </p>
        <a href="#" className="color-primary text-xs">
          Bid Now (See All)
        </a>
      </div>

      <ScrollContainer>
        <div className="w-fit flex my-2">
          <CryptoItem />
          <CryptoItem isGreen={true} />
          <CryptoItem />
          <CryptoItem />
          <CryptoItem />
          <CryptoItem isGreen={true} />
          <CryptoItem />
          <CryptoItem />
          <CryptoItem />
          <CryptoItem isGreen={true} />
          <CryptoItem />
          <CryptoItem />
        </div>
      </ScrollContainer>

      {isMobile && <AllVideos />}

      <ValyouSongDrawer />
    </InsideLayout>
  );
}
