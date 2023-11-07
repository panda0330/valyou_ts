interface Props {
  imageURL?: string;
}

export default function VideoCard({
  imageURL = 'drake-gods-plan.webp',
}: Props) {
  return (
    <a className="flex box-shadow-thin p-1" href="/video_detail">
      <img
        className="block w-[150px] object-cover"
        src={`/image/${imageURL}`}
        alt="public/image/drake-gods-plan.webp"
      />
      <div className="ml-2 flex flex-col gap-1 p-1">
        <p>Drake - Sticky (Official Video)</p>
        <p className="text-xs">Singer</p>
        <p className="text-sm">Song Valyou: $ 0.332</p>
        <a href="#" className="color-primary text-xs flex gap-1 items-center">
          Stock Price{' '}
          <img src="/image/down-arrow-circle.svg" alt="down_arrow" />{' '}
          <span className="font-semibold text-xs">$78.44 VXD</span> - 10.77%
        </a>
      </div>
    </a>
  );
}
