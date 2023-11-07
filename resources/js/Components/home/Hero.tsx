import { Box, Typography } from '@mui/material';

export default function HomeHero() {
  return (
    <Box className="flex flex-wrap justify-between items-center my-10 md:my-20">
      <Box className="w-full md:w-1/2 md:pr-10">
        <Typography
          className="text-center w-full bg-gray-200 text-[#00B8BA] py-1"
          sx={{ fontWeight: '800', fontSize: '14px' }}
        >
          The World's First Blockchain Powered
        </Typography>
        <Typography
          component={'h1'}
          sx={{ fontWeight: '700', fontSize: '46px' }}
        >
          Music Artist{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd4680] to-[#fea75c]">
            Financial Stock
          </span>{' '}
          Market
        </Typography>
        <Typography sx={{ fontWeight: '300', fontSize: '16px' }}>
          Linked to a new global music industry & economy powered by
          decentralised finance. Purchase NFT digital asset stocks in any
          Upcoming, Independent & Major Artist brand & receive a portion of
          their revenue as dividends for holding their stock.
        </Typography>
      </Box>
      <Box className="w-full md:w-1/2 md:pl-10">
        <img src="/image/valyoux_img.webp" alt="home_hero_image" />
      </Box>
    </Box>
  );
}
