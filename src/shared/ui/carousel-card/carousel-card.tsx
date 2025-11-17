import type { FC } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import ShoppingCart from '../../assets/icon/shopping-cart.svg';
import TestImg from '../../assets/images/test-card-img.png';
import { ICard } from '../../types';
import styles from './style.module.css';

interface ICarouselCardProps {
  card: ICard;
}

export const CarouselCard: FC<ICarouselCardProps> = ({ card }) => {
  const { title, subTitle, image, id } = card;
  return (
    <Box key={id} className={styles.carousel_card}>
      <IconButton className={styles.carousel_card__shopping_cart_button}>
        <img src={ShoppingCart} alt='' />
      </IconButton>
      <img src={image} alt='' />
      <Box>
        <Typography className={styles.carousel_card__text} variant='h4'>
          {title}
        </Typography>
        <Typography className={styles.carousel_card__text} variant='subtitle1'>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
