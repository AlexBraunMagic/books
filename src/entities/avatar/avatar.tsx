import { FC } from 'react';
import Typography from '@mui/material/Typography';
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
      {email && (
        <Typography
          sx={{ color: '#fff' }}
          fontFamily='BonaNova'
          fontWeight={400}
          fontSize='11px'
        >
          {email}
        </Typography>
      )}
    </Box>
  );
};
