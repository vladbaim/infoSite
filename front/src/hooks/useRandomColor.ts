import { useTheme } from '@mui/system';
import { useMemo } from 'react';

export const useRandomColor = () => {
  const theme = useTheme();
  const colors = [
    theme.palette.text.primary,
    theme.palette.error.light,
    theme.palette.info.light,
    theme.palette.primary.main,
    theme.palette.secondary.light,
    theme.palette.success.light,
    theme.palette.warning.light
  ];
  const color = useMemo(() => colors[Math.floor(Math.random() * colors.length)], [theme.palette.mode]);
  return color;
};
