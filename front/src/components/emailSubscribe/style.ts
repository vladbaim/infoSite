import { FormControl, styled } from '@mui/material';

export const SubscribeFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  maxWidth: 300,
  width: '100%',
  gap: 10,
  [theme.breakpoints.down('sm')]: {
    paddingTop: 10
  }
}));
