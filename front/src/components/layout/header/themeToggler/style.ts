import { IconButton, styled } from '@mui/material';

export const ThemeModeTogglerIconButton = styled(IconButton)(({ theme }) => ({
  transitionProperty: 'color',
  transitionDuration: '0.3s',
  '&:hover': {
    color: theme.palette.primary.main
  }
}));
