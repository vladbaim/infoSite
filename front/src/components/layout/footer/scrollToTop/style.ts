import { Box, Button, styled } from '@mui/material';

type ScrollToTopBoxStyleProps = {
  visible?: boolean;
};

export const ScrollToTopBox = styled(Box)<ScrollToTopBoxStyleProps>(({ theme, visible }) => ({
  position: 'fixed',
  bottom: visible ? 15 : -50,
  right: 15,
  transitionProperty: 'all',
  transitionDuration: '0.3s'
}));

export const ScrollToTopButton = styled(Button)(({ theme }) => ({
  minWidth: 36,
  width: 36,
  height: 36
}));
