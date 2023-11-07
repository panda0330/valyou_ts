import styled from '@emotion/styled';

interface Props {
  isBlack?: boolean;
  title: string;
  content: string;
  desc?: string;
}

export default function WalletItem({ isBlack, title, content, desc }: Props) {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: isBlack ? '#000' : '#fff',
        padding: '20px 10px',
        borderRadius: '5px',
        width: '400px',
        height: '200px',
        margin: '10px',
      }}
    >
      <div className="flex items-center justify-between">
        <img
          src="/image/valyoux_black_logo.svg"
          alt="valyoux_black_logo.svg"
          style={{ width: '50px' }}
        />
        <p
          className="text-lg font-bold"
          style={{ color: isBlack ? '#fff' : 'inherit' }}
        >
          {title}
        </p>
      </div>
      <p
        className="text-3xl font-bold mt-3"
        style={{ color: isBlack ? '#fff' : 'inherit' }}
      >
        {content}
      </p>
      <p
        className="text-xs mt-2"
        style={{ color: isBlack ? '#fff' : 'inherit' }}
      >
        {desc}
      </p>
    </div>
  );
}
