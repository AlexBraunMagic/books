import { FC } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { IBaseComponentType } from '../../shared/types';

export const Layout: FC<IBaseComponentType> = ({ children }) => {
  return (
    <Box sx={{ margin: '0 auto' }}>
      <Container>{children}</Container>
    </Box>
  );
};
