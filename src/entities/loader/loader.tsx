import { FC } from 'react';
import Box from '@mui/material/Box';
import PageLoaderGif from '../../shared/assets/gif/page-loader.gif';
import { Layout } from '../layout/layout';
import styles from './style.module.css';

export const PageLoader = () => {
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
