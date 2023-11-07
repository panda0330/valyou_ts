interface Props {
  title: string;
  content: string;
}

export default function FundingCard({ title, content }: Props) {
  return (
    <div className="box-shadow w-full md:w-1/4 p-6 text-center rounded-lg">
      <h4 className="text-pink-gradient text-2xl font-bold">{title}</h4>
      <p className="text-base font-normal">{content}</p>
    </div>
  );
}
