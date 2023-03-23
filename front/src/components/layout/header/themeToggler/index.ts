import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../pages/_app';

import { View } from './view';

export const ThemeToggler = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return View({
    currentMode: theme.palette.mode,
    toggleColorMode
  });
};
