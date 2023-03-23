import { Box, darken, styled } from '@mui/material';

export const CopyrightBox = styled(Box)(({ theme }) => ({
  background: darken(theme.palette.background.paper, 0.1),
  paddingBlock: 20,
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

export const CopyrightLinksBox = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 10,
    flexDirection: 'column-reverse',
    margin: 'auto'
  }
}));

export const CopyrightInnerBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));
