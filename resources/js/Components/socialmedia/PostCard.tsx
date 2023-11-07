import styled from '@emotion/styled';
import { Avatar, Button, Card, TextField } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  :focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export default function PostCard() {
  return (
    <Card className="p-2">
      <div className="flex">
        <Avatar
          src="/image/sampleAvatar.jpg"
          sx={{ width: '50px', height: '50px' }}
        />
        <TextArea placeholder="Share your Audi and Video Tracks" />
      </div>
      <div className="flex mt-4">
        <Button
          startIcon={
            <SlideshowIcon
              sx={{
                border: '1px solid #424242',
                borderRadius: '100px',
                fontSize: '16px',
                padding: '3px',
                width: '30px',
                height: '30px',
              }}
            />
          }
          sx={{ color: '#3f3e3e' }}
        >
          Upload Video
        </Button>
        <Button
          startIcon={
            <MusicNoteIcon
              sx={{
                border: '1px solid #424242',
                borderRadius: '100px',
                fontSize: '16px',
                padding: '3px',
                width: '30px',
                height: '30px',
              }}
            />
          }
          sx={{ color: '#3f3e3e' }}
        >
          Upload Audio
        </Button>
        <Button
          variant="contained"
          className="bg-gradient-to-r from-[#fd4680] to-[#fea75c]"
          sx={{ width: '200px', marginLeft: 'auto', fontWeight: '600' }}
        >
          post now
        </Button>
      </div>
    </Card>
  );
}
