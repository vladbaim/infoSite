import { Box } from '@mui/material';
import { FC, RefObject } from 'react';

export const ContentContainer: FC = ({ children }) => (
  <Box display='flex' flexDirection='column' gap={4}>
    {children}
  </Box>
);
