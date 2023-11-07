import { Box, Typography } from '@mui/material';

export default function Faq() {
  return (
    <Box className="my-20">
      <Typography
        className="text-center"
        component={'h1'}
        sx={{ fontWeight: '700', fontSize: '46px' }}
      >
        Main{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd4680] to-[#fea75c]">
          Problems
        </span>{' '}
        & Solutions
      </Typography>

      <div className="detail my-10">
        <details className="music text-left">
          <summary className="music-summary">
            <div className="flex">
              <p className="text-left text-3xl font-bold"> Music Artist.</p>
            </div>
          </summary>
          <ul>
            <li className="cursor-pointer py-2">
              <span>
                Cost to launch music career Independently is very expensive,
                estimated around $500K to $2M
              </span>
            </li>
            <li className="cursor-pointer py-2">
              <span>
                An exchange where Music artists list as their own startups,
                music fans can invest.
              </span>
            </li>
            <br />
            <li className="cursor-pointer py-2">
              <span>
                Streaming platforms significantly shortchanges the value of the
                average music artist.
              </span>
            </li>
            <li className="cursor-pointer py-2">
              <span>
                DEFI pay per/view streaming with increased NFT value for
                unlimited song access.
              </span>
            </li>
            <br />
            <li className="cursor-pointer py-2">
              <span>
                No way to connect with quality assured reputable music industry
                professionals.
              </span>
            </li>
            <li className="cursor-pointer py-2">
              <span>
                Marketplace to connect businesses offering pro services to
                listed artists brands.
              </span>
            </li>
            <br />
            <li className="cursor-pointer py-2">
              <span>
                Artists lack a business mindset and understanding of music
                industry contracts.
              </span>
            </li>
            <li className="cursor-pointer py-2">
              <span>
                Smart Contract &amp; Fund Management, reduce risk &amp; still
                maximise profits for investors.
              </span>
            </li>
            <br />
            <li className="cursor-pointer py-2">
              <span>
                Upcoming, Independent &amp; Major Artists. All artists can get
                listed and raise the capital they need to launch or enhance
                their music careers or brand. Imagine 20,000 of your true fans
                invested $100 that is $2,000,000 for you to build your brand and
                stay in control of your business independent or signed inside a
                new global music Industry and artist focused economy.
              </span>
            </li>
          </ul>
        </details>
        <details className="music text-left">
          <summary className="music-summary">
            <p className="text-left text-3xl font-bold"> Investors. </p>
          </summary>
          <ul>
            <li>
              Imagine at the click of a button you could own a share in Justin
              Bieber, Beyonce's brand? Most importantly imagine investing in
              your friend, or favourite upcoming artists that you discovered or
              follow online and got paid a profit share of the royalties
              generated from that artist brand directly into your account
              digital wallet, as a return on investment from their brands growth
              in revenue generated across the industry.
            </li>
            <br />
            <li>
              Most people have a friend or family aspiring to become music
              artists. Record labels simply cannot sign every single artist on
              the planet.
            </li>
            <br />
            <li>
              Artist brands, such as Jay Z, Kanye West who are worth billions
              through successful music careers, the establishment and funding of
              their own music label, and making smart investments. Assume you
              had the option to invest into it, into their brand when they were
              upcoming startup artists and held that stock till now with an
              opportunity for generating passive income from royalties &amp;
              being a true fan with skin in the game automatically sharing in
              their success.
            </li>
          </ul>
        </details>
        <details className="music text-left">
          <summary className="music-summary">
            <p className="text-left text-3xl font-bold"> Business. </p>
          </summary>
          All businesses, freelancers services can connect and grow with artist
          brands, such as Producers, Song writers, Beat maker, Advertisers,
          Radio, Influencers, Artist managers, Record labels, Spotify, YouTube,
          Soundcloud + more.
        </details>
        <details className="music text-left">
          <summary className="music-summary">
            <p className="text-left text-3xl font-bold"> Blockchain. </p>
          </summary>
          The Valyou X Token is a cryptocurrency that is required for entry into
          the new global Global Music Industry.By staking Valyou X tokens
          against the platform' s stable currency VXD. It may be used for
          payments, streaming, and investment in tokenised music artist brands
          as a new type of digital asset, enhancing investor confidence and
          preventing fraud.
        </details>
      </div>
    </Box>
  );
}
