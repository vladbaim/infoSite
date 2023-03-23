import { Link as MULink, styled } from '@mui/material';

type LinkStyleProps = {
  withoutTextDecoration?: boolean;
};

export const Link = styled(MULink, { shouldForwardProp: (prop) => prop !== 'withoutTextDecoration' })<LinkStyleProps>(
  ({ theme, withoutTextDecoration }) => ({
    color: theme.palette.text.primary,
    cursor: 'pointer',
    width: 'max-content',
    '&:hover': {
      color: withoutTextDecoration ? theme.palette.text.primary : theme.palette.primary.main
    }
  })
);
