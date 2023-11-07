import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MainFooter() {
  return (
    <>
      <footer>
        <div className="ml-[-10px] bg-black">
          <div className="container mx-auto flex flex-col items-center justify-center pb-6 pt-10">
            <div className="my-4">
              <img src="image/logo_white.svg" alt="" />
            </div>
            <div className="flex items-center justify-center">
              <InstagramIcon className="!text-white" />
              <FacebookIcon className="!text-white" />
              <TwitterIcon className="!text-white" />
              <GitHubIcon className="!text-white" />
            </div>
            <div className="footer_text text-white">
              <p className="p-5 text-[12px] text-white">
                All images with or without permission and its terms of use as
                modified are simply for demo purposes. Valyou X isn’t intending
                to mislead or misrepresent any artist listed. We just want the
                world to be able to better understand the idea, our vision and
                to better assist us with its execution.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
