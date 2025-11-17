import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Carousel, CarouselCard, Layout } from 'shared/ui';
import { ICard } from 'shared/types';
import { OUR_BEST_BOOK_SECTION_TITLE, TEST_SLIDER_DATA } from 'shared/consts';
import styles from './style.module.css';

export const OurBestBook: FC = () => {
  return (
    <Box className={styles.our_best_book__section} component='section'>
      <Layout>
        <Box display='flex' flexDirection='column' gap='79px'>
          <Typography className={styles.our_best_book__title} variant='h2'>
            {OUR_BEST_BOOK_SECTION_TITLE}
          </Typography>
          <Carousel<ICard>
            allSlides={TEST_SLIDER_DATA}
            SlideCard={CarouselCard}
          />
        </Box>
      </Layout>
    </Box>
  );
};
