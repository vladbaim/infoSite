import { Box, styled } from '@mui/material';

export const FooterBox = styled(Box)(({ theme }) => ({
  borderTop: 8,
  borderTopStyle: 'solid',
  borderColor: theme.palette.primary.main,
  marginTop: 'auto',
  boxShadow: `0 -8px 0 ${theme.palette.divider}`,
  background: theme.palette.background.paper
}));
