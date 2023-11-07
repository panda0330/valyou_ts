import classNames from 'classnames';

interface Props {
  isGreen?: boolean;
}

export default function CryptoItem({ isGreen = false }: Props) {
  return (
    <div className="w-[250px] mr-2">
      <div
        className={classNames(
          'rounded-lg flex items-center justify-center py-8 mb-2',
          { 'green-gradient': isGreen },
          { 'bg-black': !isGreen }
        )}
      >
        <img src="/image/mcdoland-black.svg" alt="macdonald" />
      </div>
      <div className="flex">
        <img
          src="/image/mcdonald.webp"
          alt="macdonald"
          className="block mr-2 w-[50px]"
        />
        <div>
          <p className="font-semibold">Crypto</p>
          <p>Click & Earn $3.00 VXD</p>
        </div>
      </div>
    </div>
  );
}
