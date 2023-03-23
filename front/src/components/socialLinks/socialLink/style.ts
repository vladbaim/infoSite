import { Box, styled } from '@mui/material';

interface SocialLinkBoxStyleProps {
  hoverColor?: string;
}

export const SocialLinkBox = styled(Box)<SocialLinkBoxStyleProps>(({ theme, hoverColor }) => ({
  cursor: 'pointer',
  color: undefined,
  '&:hover': {
    color: hoverColor
  }
}));
