import { Card, Avatar, Button } from '@mui/material';

export default function GridItem() {
  return (
    <Card className="flex justify-between items-center px-2 py-3 my-2">
      <p>1</p>
      <div className="flex">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: '50px', height: '50px' }}
        />
        <div className="ml-2">
          <p>Drake</p>
          <p>rapper</p>
        </div>
      </div>
      <div>
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
                src="https://valyou-x.vercel.app/assets/greeen-arrow.svg"
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
            <img
              srcSet="/assets/down-arrow-circle.svg 1x, /assets/down-arrow-circle.svg 2x"
              src="/assets/down-arrow-circle.svg"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: 'absolute',
                inset: 0,
                boxSizing: 'border-box',
                padding: 0,
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: 0,
                height: 0,
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%',
              }}
            />
          </span>
          <div className="bg-[#1CEA2C] text-sm px-[9px] py-1 rounded">
            <p className="text-white"> + 249.9020%</p>
          </div>
        </span>
      </div>
      <p className="color-primary">$ 1.4100</p>
      <p>$ 141,000,000</p>
      <p>0.0100%</p>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#000' }}
        href="/wallet"
      >
        Invest in artist
      </Button>
    </Card>
  );
}
