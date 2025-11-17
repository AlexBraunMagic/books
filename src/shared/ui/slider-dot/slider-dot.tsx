import type { FC } from 'react';
import { Box } from '@mui/material';
import styles from './style.module.css';

interface ISliderDotProps {
  isActive: boolean;
  dotValue: number;
  handleClick: (val: number) => void;
}

export const SliderDot: FC<ISliderDotProps> = ({
  isActive,
  dotValue,
  handleClick,
}) => {
  const dotClick = () => {
    handleClick(dotValue);
  };

  return (
    <Box
      style={{ backgroundColor: isActive ? '#64aef4' : 'transparent' }}
      className={styles.slider_dot}
      onClick={dotClick}
    ></Box>
  );
};
