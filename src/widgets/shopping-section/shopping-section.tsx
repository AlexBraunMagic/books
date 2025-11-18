import { FC } from 'react';
import { Box, Typography, Button, ButtonBase } from '@mui/material';
import { Layout, ShoppingSectionInfoCard } from 'shared/ui';

import ShoppingBookImg from 'shared/assets/images/shopping-section-img.png';

import styles from './style.module.css';
import {
  SHOPPING_SECTION_TEXT,
  SHOPPING_SECTION_TITLE_PART_1,
  SHOPPING_SECTION_TITLE_PART_2,
} from 'shared/consts';
import {
  SHOPPING_SECTION_BUTTON,
  SHOPPING_SECTION_INFO_CARDS,
} from 'shared/consts/texts-consts';

export const ShoppingSection: FC = () => {
  return (
    <Box component='section' className={styles.shopping_section}>
      <Layout>
        <Box display='flex' gap='40px'>
          <img
            className={styles.shopping_section__image}
            src={ShoppingBookImg}
            alt=''
          />
          <Box display='flex' flexDirection='column' gap='55px'>
            <Box display='flex' flexDirection='column' gap='20px'>
              <Box>
                <Typography
                  variant='h4'
                  className={`${styles.shopping_section__title} ${styles.shopping_section__title__part_1}`}
                >
                  {SHOPPING_SECTION_TITLE_PART_1}
                  <Typography
                    variant='h4'
                    className={`${styles.shopping_section__title} ${styles.shopping_section__title__part_2}`}
                  >
                    {SHOPPING_SECTION_TITLE_PART_2}
                  </Typography>
                </Typography>
              </Box>
              <Typography
                variant='h6'
                className={styles.shopping_section__text}
              >
                {SHOPPING_SECTION_TEXT}
              </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='31px'>
              <Box display='flex' gap='91px'>
                {SHOPPING_SECTION_INFO_CARDS.map((item) => (
                  <ShoppingSectionInfoCard cardInfo={item} />
                ))}
              </Box>
              <ButtonBase className={styles.shopping_section__button}>
                <Typography className={styles.shopping_section__button_text}>
                  {SHOPPING_SECTION_BUTTON}
                </Typography>
              </ButtonBase>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};
