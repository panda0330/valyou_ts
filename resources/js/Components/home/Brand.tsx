import { Box, Typography } from '@mui/material';

export default function Brand() {
  const tempArr: any[] = [
    { title: 'Alibaba Group Award Winner', image: 'alibaba.png' },
    { title: 'Official Cloud Service Partner', image: 'alibabacloud_icon.svg' },
    { title: 'People Choice Award', image: 'download.png' },
    { title: 'Wildcard Finalist', image: 'download (1).png' },
    { title: 'As Seen On Inflight entertainment', image: 'download (2).png' },
    { title: 'Top 20 Global Finalist / 700', image: 'download (3).png' },
    { title: 'As seen at Midem France', image: 'download (4).png' },
    { title: 'Trade Award Winner', image: 'download (5).png' },
    { title: 'Award Winner', image: 'download (6).png' },
    { title: '', image: 'fintech_logo.webp' },
  ];

  return (
    <>
      <Box className="shadow py-10 flex items-center justify-center rounded">
        <p className="lg:text-4xl text-lg font-bold text-center">
          Valyou X - Is A Multi Award Winning Start-Up
        </p>
      </Box>
      <Box className="flex flex-wrap my-4 justify-between">
        {tempArr.map((item: any) => (
          <Box
            className="shadow flex flex-col justify-center items-center py-4 my-1 rounded"
            sx={{ width: 'calc(100% / 5 - 15px)' }}
          >
            <Box className="w-3/5 mx-auto mb-2">
              <img
                className="block mx-auto h-[90px]"
                src={`/image/${item.image}`}
                alt="alibaba"
              />
            </Box>
            <p className="text-xs font-extralight">{item.title}</p>
          </Box>
        ))}
      </Box>
    </>
  );
}
