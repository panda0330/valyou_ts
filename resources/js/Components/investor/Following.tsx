import { Avatar, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Following() {
  return (
    <div className="bg-black flex items-center p-3 rounded-lg">
      <Avatar
        src="/image/sampleAvatar.jpg"
        sx={{ width: '60px', height: '60px' }}
      />
      <div className="ml-2">
        <p className="font-bold text-white">Bobby Oparaoch</p>
        <p className="text-white">Music Fan</p>
        <p className="text-white">
          Investor{' '}
          <CheckCircleIcon sx={{ color: '#1eb054' }} fontSize="small" />
        </p>
      </div>
      <Button
        variant="outlined"
        size="small"
        sx={{ color: '#fff', border: '1px solid #fff', marginLeft: 'auto' }}
      >
        Following
      </Button>
    </div>
  );
}
