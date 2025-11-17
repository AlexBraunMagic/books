import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import sectionBackground1 from 'shared/assets/images/search-section-bg.png';
import { Header } from 'widgets/header';
import { Layout } from 'shared/ui';
import {
  HEADER_TOP_SEARCH_SECTION_TITLE,
  HOME_PAGE_SEARCH_SECTION_TEXT,
} from 'shared/consts';
import styles from './style.module.css';

export const HomePageSearchSection: FC = () => {
  return (
    <Box
      component='section'
      sx={{
        height: '100vh',
        backgroundImage: `url(${sectionBackground1})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <Box
        sx={{
          paddingTop: '68px',
          paddingBottom: '54px',
        }}
      >
        <Layout>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            <Typography
              sx={{
                display: 'inline',
                color: 'transparent',
                '-webkit-background-clip': 'text',
                backgroundClip: 'text',
                backgroundImage: 'radial-gradient(circle, #CC9600, #FF7700)',
              }}
              variant='h2'
              fontFamily='BonaNova'
              fontWeight={700}
              fontSize='48px'
            >
              {HEADER_TOP_SEARCH_SECTION_TITLE}
            </Typography>
            <Typography
              variant='body2'
              fontFamily='BonaNova'
              fontWeight={400}
              fontSize='20px'
              sx={{ color: '#fff', textAlign: 'center', maxWidth: '888px' }}
            >
              {HOME_PAGE_SEARCH_SECTION_TEXT}
            </Typography>
            <form action=''>
              <Box className={styles.searchWrapper}>
                <TextField
                  placeholder='Search  a Book'
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '0',
                      color: '#fff',
                      fontFamily: 'BonaNova',
                      fontSize: '15px',
                      '::placeholder': {
                        color: '#A59F9F',
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                />
                <Button className={styles.searchButton}>Search</Button>
              </Box>
            </form>
          </Box>
        </Layout>
      </Box>
    </Box>
  );
};
