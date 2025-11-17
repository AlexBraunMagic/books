import { FC } from 'react';
import { HomePageSearchSection } from '../../widgets/home-page-search-section';
import { OurBestBook } from '../../widgets/best-book-section/best-book';

const HomePage: FC = () => {
  return (
    <>
      <HomePageSearchSection />
      <OurBestBook />
    </>
  );
};

export default HomePage;
