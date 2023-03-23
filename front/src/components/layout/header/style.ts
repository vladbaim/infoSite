import { alpha, Box, styled } from '@mui/material';

interface HeaderBoxStylesProps {
  isSticky?: boolean;
  isColored?: boolean;
}

export const HeaderBox = styled(Box)<HeaderBoxStylesProps>(({ theme, isSticky, isColored }) => ({
  height: 60,
  zIndex: theme.zIndex.appBar,
  boxShadow: '0 5px 10px -5px rgb(0 0 0 / 10%)',
  transitionProperty: 'all',
  transitionDuration: '0.3s',
  background: isSticky ? alpha(theme.palette.background.paper, 0.9) : isColored ? theme.palette.background.paper : undefined
}));

export const HeaderToolbarBox = styled(Box)(({ theme }) => ({
  borderBottom: 1,
  borderBottomStyle: 'solid',
  borderColor: theme.palette.divider,
  paddingBlock: 8,
  background: theme.palette.background.paper
}));
