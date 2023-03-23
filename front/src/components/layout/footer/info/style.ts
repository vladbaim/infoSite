import { Box, Container, FormControl, styled } from '@mui/material';

export const FooterInfoContainer = styled(Container)(({ theme }) => ({
  paddingTop: 60,
  paddingBottom: 40,
  [theme.breakpoints.down('md')]: {
    paddingTop: 40,
    paddingBottom: 30
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: 30,
    paddingBottom: 20
  }
}));

export const FooterWithSubscribeBox = styled(Box)(({ theme }) => ({
  gap: 60,
  paddingTop: 40,
  [theme.breakpoints.down('md')]: {
    gap: 40,
    paddingTop: 30
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 10,
    paddingTop: 20
  }
}));

export const FooterLogoAndDescBox = styled(Box)(({ theme }) => ({
  gap: 20,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 0,
    textAlign: 'center'
  }
}));
