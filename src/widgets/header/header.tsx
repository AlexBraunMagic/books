import type { FC } from 'react';
import Box from '@mui/material/Box';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import headerBackground from 'shared/assets/images/header-bg.png';
import avatarImg from 'shared/assets/images/avatar-stab.png';
import { HeaderAvatar, HeaderLogo, Layout } from 'shared/ui';
import { HeaderNavigate } from 'features/header-navigate';
import styles from './style.module.css';

export const Header: FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${headerBackground})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout>
        <div className={styles.headerWrapper}>
          <HeaderLogo />
          <HeaderNavigate />
          <NotificationsNoneIcon />
          <HeaderAvatar img={avatarImg} email='user1@bookpoint.com' />
        </div>
      </Layout>
    </Box>
  );
};
