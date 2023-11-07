import * as React from 'react';
import Box from '@mui/material/Box';
import InsideLayout from '@/Layouts/InsideLayout';
import { Avatar, SxProps, Card } from '@mui/material';
import LargeVideoCard from '@/Components/watch_earn/LargeVideoCard';
import VideoCard from '@/Components/watch_earn/VideoCard';
import CryptoItem from '@/Components/socialmedia/CryptoItem';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

const TabStyle: SxProps = {
  fontWeight: '600',
};

export default function AudioDetail() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <InsideLayout activeTab="Watch & Earn">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="flex justify-between my-4">
          <LargeVideoCard />
          <div className="box-shadow-thin hidden lg:w-[29%] p-2 lg:h-[40vw] overflow-y-auto lg:flex flex-col gap-3">
            <p className="text-xl font-bold">All Videos</p>
            <VideoCard imageURL="drake-gods-plan.webp" />
            <VideoCard imageURL="drake-starting-bottom.webp" />
            <VideoCard imageURL="drake-sticky.webp" />
            <VideoCard imageURL="drake-life-is-good.webp" />
            <VideoCard imageURL="drake-hotline.webp" />
            <VideoCard imageURL="drake-gods-plan.webp" />
            <VideoCard imageURL="drake-starting-bottom.webp" />
            <VideoCard imageURL="drake-sticky.webp" />
            <VideoCard imageURL="drake-life-is-good.webp" />
            <VideoCard imageURL="drake-hotline.webp" />
          </div>
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
      </Box>
    </InsideLayout>
  );
}
