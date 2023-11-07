import { Box, Typography } from '@mui/material';

export default function How() {
  return (
    <>
      <Typography
        className="text-center"
        component={'h1'}
        sx={{ fontWeight: '700', fontSize: '46px' }}
      >
        See{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1db8ba] to-[#28f0c0]">
          how it
        </span>{' '}
        works
      </Typography>
      <p className="text-center font-extralight">
        All users, Music Artists, Fans as investors and Businessess buy Valyou X
        tokens for access into the app.
      </p>
      <Box>
        <img
          className="block mx-auto my-10"
          src="/image/howitworks.svg"
          alt="How it works"
        />
      </Box>
    </>
  );
}
