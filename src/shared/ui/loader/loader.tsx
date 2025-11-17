import type { FC } from 'react';
import Box from '@mui/material/Box';
import PageLoaderGif from 'shared/assets/gif/page-loader.gif';
import { Layout } from '../layout';
import styles from './style.module.css';

export const PageLoader: FC = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Layout>
        <Box className={styles.pageLoaderWrapper}>
          <img className={styles.pageLoader} src={PageLoaderGif} alt='Loader' />
        </Box>
      </Layout>
    </Box>
  );
};
