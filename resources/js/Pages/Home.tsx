import About from '@/Components/home/About';
import Brand from '@/Components/home/Brand';
import Faq from '@/Components/home/Faq';
import HomeHero from '@/Components/home/Hero';
import How from '@/Components/home/How';
import MainLayout from '@/Layouts/MainLayout';

function Home() {
  return (
    <MainLayout>
      <HomeHero />
      <Brand />
      <About />
      <How />
      <Faq />
    </MainLayout>
  );
}
export default Home;
