import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css';

export default function ScrollText() {
  return (
    <ScrollContainer>
      <div className="w-max flex scrolling gap-8">
        <span className="font-bold"> EXCHANGE RATES:</span>
        <p className="font-[500]">
          1 ETHEREUM (ETH) = 0.02776 BTC = $1185.89000000 USD
          <span className="text-[#00B8BA] font-[500]"> + 0.25% </span>
        </p>
        <p className="font-[500]">
          1 BITCOIN (BTC) = 20504.84000000 USD -{' '}
          <span className="color-primary">0.15%</span>
        </p>
        <p className="font-[500]">
          1 Valyou X Dollar (VXD) = $1.00090000 USDC{' '}
          <span className="color-primary"> - 0.1% </span>
        </p>
        <p className="font-[500]">
          1 VALYOU X MUSIC (VALYOU X) = $0.50 USDC
          <span className="text-[#00B8BA] font-[500]"> + 2.5% </span>
        </p>
      </div>
    </ScrollContainer>
  );
}
