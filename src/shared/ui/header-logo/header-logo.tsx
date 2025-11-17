import type { FC } from 'react';
import headerLogo from 'shared/assets/icon/header-logo.svg';
import headerName from 'shared/assets/icon/header-name.svg';
import styles from './style.module.css';

export const HeaderLogo: FC = () => {
  return (
    <div className={styles.headerIconWrapper}>
      <img src={headerLogo} alt='Logo' />
      <img src={headerName} alt='Name store' />
    </div>
  );
};
