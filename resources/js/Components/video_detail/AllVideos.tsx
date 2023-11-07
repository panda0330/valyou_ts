import VideoCard from '../watch_earn/VideoCard';

export default function AllVideos() {
  return (
    <div className="box-shadow-thin hidden lg:w-[29%] p-2 lg:h-[40vw] overflow-y-auto lg:flex flex-col gap-3 hide-scrollbar">
      <p className="text-xl font-bold">All Videos</p>
      <VideoCard imageURL="drake-gods-plan.webp" />
      <VideoCard imageURL="drake-starting-bottom.webp" />
      <VideoCard imageURL="drake-sticky.webp" />
      <VideoCard imageURL="drake-life-is-good.webp" />
      <VideoCard imageURL="drake-hotline.webp" />
    </div>
  );
}
