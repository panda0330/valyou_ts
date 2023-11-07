import { Box, Card, Typography } from '@mui/material';

export default function About() {
  return (
    <Card className="flex flex-wrap justify-between items-center px-2 py-4 my-20">
      <Box className="w-full md:w-1/2 md:pr-6 lg:pr-10">
        <img className="rounded" src="/image/singer.jpeg" alt="singer" />
      </Box>
      <Box className="w-full md:w-1/2 md:pl-6 lg:pl-10">
        <Typography
          component={'h1'}
          sx={{ fontWeight: '700', fontSize: '46px' }}
        >
          We are{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd4680] to-[#fea75c]">
            rebuilding
          </span>{' '}
          the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1db8ba] to-[#28f0c0]">
            music
          </span>{' '}
          industry
        </Typography>
        <p className="font-extralight mt-4">
          Valyou X is creating the world’s first music artist stock and
          financial market, where you can invest in music artists’ brands, as
          listed stocks. Blockchain Technology is at the heart of it. However,
          first to begin, we must rebuild the entire music industry in order to
          serve as a globally scalable digital hub for the entire music
          industry. A platform that enables aspiring artists to use their music
          to launch a profitable business and then connects to the financial
          markets trusted by Blockchain.
        </p>
      </Box>
    </Card>
  );
}
