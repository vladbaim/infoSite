import { alpha, Box, styled } from '@mui/material';
import { withMaxRowsCount } from '../../../styles';

export const BackgroundFaderBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  marginTop: 'auto',
  backgroundImage: `linear-gradient(to bottom, transparent, ${alpha(theme.palette.background.paper, 0.75)})`,
  padding: 20,
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: 10
  },
  [theme.breakpoints.down('sm')]: {
    padding: 8
  },
  [theme.breakpoints.down(300)]: {
    padding: 5
  },
  '& .post-on-preview-background-description': {
    ...withMaxRowsCount(),
    maxHeight: 0,
    transitionProperty: 'max-height color',
    transitionDuration: '0.5s',
    color: 'transparent'
  },
  '&:hover': {
    '& .post-on-preview-background-description': {
      ...withMaxRowsCount(),
      color: theme.palette.text.primary
    }
  }
}));
