import { Box, styled } from '@mui/material';

type DesktopMenuBoxStyleProps = {
  isSticky?: boolean;
};

export const DesktopMenuBox = styled(Box)<DesktopMenuBoxStyleProps>(({ theme, isSticky }) => ({
  background: isSticky ? 'transparent' : theme.palette.background.paper,
  height: 60,
  paddingRight: 10
}));

type DesktopMenuItemBoxStyleProps = {
  active?: boolean;
};

export const DesktopMenuItemBox = styled(Box)<DesktopMenuItemBoxStyleProps>(({ theme, active }) => ({
  cursor: 'pointer',
  padding: 7,
  height: 60,
  transitionProperty: 'all',
  transitionDuration: '0.3s',
  ...(active && {
    position: 'relative',
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    height: 65,
    marginTop: 5,
    paddingBottom: 12,
    ':after': {
      content: '""',
      width: 20,
      height: 2,
      background: theme.palette.primary.contrastText,
      position: 'absolute',
      marginTop: 17,
      left: '50%',
      top: '50%',
      bottom: 'auto',
      right: 'auto',
      transform: 'translateX(-50%) translateY(-50%)'
    }
  }),
  '&:hover': {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main
  }
}));
