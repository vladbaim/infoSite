import { Chip, styled } from '@mui/material';

export const LinkChip = styled(Chip)(({ theme }) => ({
  borderColor: theme.palette.text.primary,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main
  }
}));
