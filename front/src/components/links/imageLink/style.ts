import { Box, styled } from '@mui/material';

export const ImageLinkBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  opacity: 1,
  '& :hover': {
    transitionProperty: 'opacity',
    transitionDuration: '0.3s',
    opacity: 0.85
  }
}));
