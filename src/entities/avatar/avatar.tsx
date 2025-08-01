import { FC } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { IHeaderAvatar } from '../../shared/types/avatar';

export const HeaderAvatar: FC<IHeaderAvatar> = ({ img, email }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Avatar src={img} />
      {email && <p>{email}</p>}
    </Box>
  );
};
