import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { IShoppinCardDescription } from 'shared/types';

import styles from './style.module.css';

interface IShoppingSectionInfoCardProps {
  cardInfo: IShoppinCardDescription;
}

export const ShoppingSectionInfoCard: FC<IShoppingSectionInfoCardProps> = ({
  cardInfo: { value, desc },
}) => {
  return (
    <Box display='flex' flexDirection='column'>
      <Typography display='flex' variant='h5' className={`${styles.info_card}`}>
        {value}
      </Typography>
      <Typography className={`${styles.info_card}`}>{desc}</Typography>
    </Box>
  );
};
