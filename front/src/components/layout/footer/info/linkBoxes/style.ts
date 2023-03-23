import { Box, Grid, styled, Typography } from '@mui/material';

export const FooterLinksWrapper = styled(Grid)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize
}));

export const FooterLinksDividerBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 2,
  background: theme.palette.primary.main,
  marginBlock: 15
}));
