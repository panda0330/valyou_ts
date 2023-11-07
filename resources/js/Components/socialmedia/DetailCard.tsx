import { Avatar, Button, Card, Chip } from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import CommentIcon from '../icons/CommentIcon';
import PromoteIcon from '../icons/PromoteIcon';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';
import CryptoItem from './CryptoItem';

export default function DetailCard() {
  return (
    <div className="p-2 my-4 box-shadow rounded">
      <Card className="flex items-center px-2 py-4">
        <Avatar
          src="/image/sampleAvatar.jpg"
          sx={{ width: '65px', height: '65px' }}
        />
        <div className="ml-2">
          <p className="text-xl font-bold">Drake</p>
          <p className="text-sm">
            <span className="font-bold text-gray-500">Rapper</span> shared video
            track <SlideshowIcon fontSize="small" />
          </p>
        </div>
        <p className="text-sm block ml-auto">Major artist</p>
      </Card>
      <video src="/video/sampleVideo.mp4" controls className="w-full my-2" />
      <div className="flex">
        <div className="flex">
          <Button
            variant="outlined"
            startIcon={<CommentIcon />}
            sx={{ color: '#000', fontWeight: '600' }}
          >
            comments
          </Button>
          <Button
            variant="outlined"
            startIcon={<PromoteIcon />}
            sx={{
              color: '#000',
              fontWeight: '600',
              marginLeft: '10px',
            }}
          >
            promote
          </Button>
        </div>
        <div className="flex ml-auto">
          <Button variant="outlined" sx={{ color: '#000', fontWeight: '600' }}>
            Valyou song
          </Button>
          <Button
            className="bg-gradient-to-r from-[#1db8ba] to-[#28f0c0]"
            variant="contained"
            sx={{
              fontWeight: '600',
              marginLeft: '10px',
            }}
          >
            invest in artist
          </Button>
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
        </div>
      </ScrollContainer>
    </div>
  );
}
