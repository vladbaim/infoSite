import { Box, BoxProps, Button, IconButton, styled } from '@mui/material';

interface HeaderBoxStylesProps {
  contentColor?: string;
}

export const ContentHeaderBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'contentColor' })<HeaderBoxStylesProps>(
  ({ theme, contentColor }) => ({
    display: 'flex',
    paddingBottom: 15,
    marginBottom: 20,
    borderBottom: '2px solid',
    borderColor: theme.palette.divider,
    position: 'relative',
    alignItems: 'center',
    ':before': {
      content: '""',
      width: 0,
      height: 0,
      position: 'absolute',
      bottom: -5,
      left: 0,
      borderLeft: 0,
      borderRight: '5px solid transparent',
      borderTop: '5px solid',
      borderTopColor: contentColor
    },
    ':after': {
      content: '""',
      background: contentColor,
      width: 40,
      height: 2,
      position: 'absolute',
      bottom: -2,
      left: 0
    }
  })
);

interface HeaderTabButtonStylesProps {
  contentColor?: string;
  isActive?: boolean;
}

export const HeaderTabButton = styled(Button, {
  shouldForwardProp: (prop) => !['contentColor', 'isActive'].includes(prop as string)
})<HeaderTabButtonStylesProps>(({ theme, contentColor, isActive }) => ({
  color: isActive ? contentColor : theme.palette.text.primary,
  borderColor: contentColor,
  '&:hover': {
    borderColor: contentColor,
    backgroundColor: contentColor,
    color: contentColor && theme.palette.getContrastText(contentColor)
  }
}));

export const HeaderTabIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => !['contentColor', 'isActive'].includes(prop as string)
})<HeaderTabButtonStylesProps>(({ theme, contentColor, isActive }) => ({
  color: isActive ? contentColor : theme.palette.text.primary,
  borderColor: contentColor,
  '&:hover': {
    borderColor: contentColor,
    backgroundColor: contentColor,
    color: contentColor && theme.palette.getContrastText(contentColor)
  }
}));
