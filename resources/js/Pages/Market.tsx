import InsideLayout from '@/Layouts/InsideLayout';
import SearchBox from '@/Components/market/SearchBox';
import GridHeader from '@/Components/market/GridHeader';
import MarketGrid from '@/Components/market/MarketGrid';

export default function Market() {
  return (
    <>
      <InsideLayout activeTab="Market">
        <SearchBox />
        <GridHeader />
        <MarketGrid />
      </InsideLayout>
    </>
  );
}
