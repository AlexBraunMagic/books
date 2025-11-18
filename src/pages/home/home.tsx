import { FC } from 'react';
import { HomePageSearchSection, OurBestBook, ShoppingSection } from 'widgets';

const HomePage: FC = () => {
  return (
    <>
      <HomePageSearchSection />
      <OurBestBook />
      <ShoppingSection />
    </>
  );
};

export default HomePage;
