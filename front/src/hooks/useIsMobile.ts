import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useIsMobile = (down: Breakpoint | number = 'md'): boolean => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(down));
  return isMobile;
};
