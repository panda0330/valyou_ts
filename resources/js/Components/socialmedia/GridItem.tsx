import { Avatar } from '@mui/material';

export default function GridItem() {
  return (
    <div className="background-shadow m-2">
      <div className="flex justify-between p-4">
        <div className="flex">
          <p className="flex items-center">1</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="flex space-x-2">
            <a href="/artist">
              <div className="MuiAvatar-root MuiAvatar-circular !w-[60px] !h-[60px] css-3i9vrz">
                <Avatar
                  src="/image/sampleAvatar.jpg"
                  sx={{ width: '60px', height: ' 60px' }}
                />
              </div>
            </a>
            &nbsp;&nbsp;
            <div className="flex-col">
              <p className="!text-[#050F3F] font-bold">Beyonce</p>
              <p className="text-bold text-[#1CEA2C]">$ 1.4100</p>
              <p className="text-[#2B2C2D]">rapper</p>
            </div>
          </span>
        </div>
        <span className="flex space-x-1 items-center">
          <span
            style={{
              boxSizing: 'border-box',
              display: 'inline-block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: 'relative',
              maxWidth: '100%',
            }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: '100%',
              }}
            >
              <img
                alt=""
                aria-hidden="true"
                src="/image/greeen-arrow.svg"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
              />
            </span>
          </span>
          <div className="bg-[#1CEA2C] text-xs px-[9px] py-1 rounded">
            <p className="text-white"> + 249.9020%</p>
          </div>
        </span>
      </div>
    </div>
  );
}
