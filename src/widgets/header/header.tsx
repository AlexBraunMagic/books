import Box from '@mui/material/Box';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import headerBackground from '../../shared/assets/images/header-bg.png';
import { Layout } from '../../entities/layout/layout';
import { HeaderLogo } from '../../entities/header-logo/header-logo';
import styles from './style.module.css';
import { HeaderNavigate } from '../../features/header-navigate';
import avatarImg from '../../shared/assets/images/avatar-stab.png';
import { HeaderAvatar } from '../../entities/avatar';

export const Header = () => {
  return (
    <Box sx={{ backgroundImage: `url(${headerBackground})` }}>
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
