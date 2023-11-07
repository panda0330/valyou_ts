import { Button } from '@mui/material';

import CommentIcon from '../icons/CommentIcon';
import PromoteIcon from '../icons/PromoteIcon';

export default function LargeVideoCard() {
  return (
    <div className="shadow-lg p-2 w-full lg:w-[70%] box-shadow rounded">
      <a href="/video_detail">
        <img
          src="/image/drake-starting-bottom.webp"
          alt="drake-starting-bottom.webp"
        />
      </a>
      <div className="flex mt-2 mb-4">
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
    </div>
  );
}
