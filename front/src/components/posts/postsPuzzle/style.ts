import { Box, styled } from '@mui/material';
import { withMaxRowsCount } from '../../../styles';

export const PostsPuzzleBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: 10,
  gridTemplateAreas: `
    'first first second second'
    'first first three fore'
  `,
  height: 450,
  [theme.breakpoints.down('md')]: {
    gridTemplateAreas: `
      'first first'
      'first first'
      'second second'
      'three fore'
    `,
    height: 700
  },
  [theme.breakpoints.down('sm')]: {
    height: 480
  },
  [theme.breakpoints.down(300)]: {
    gridTemplateAreas: `
      'first'
      'second'
      'three'
      'fore'
    `
  }
}));

export const FirstPostPuzzleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& h2': {
    fontSize: 28,
    fontWeight: 'bold',
    ...withMaxRowsCount(),
    [theme.breakpoints.down(300)]: {
      fontSize: 15
    }
  }
}));

export const SecondPostPuzzleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& h2': {
    fontSize: 18,
    fontWeight: 'bold',
    ...withMaxRowsCount(),
    [theme.breakpoints.down(300)]: {
      fontSize: 15
    }
  }
}));

export const ThreeAndForePostPuzzleBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& h2': {
    fontSize: 16,
    fontWeight: 'bold',
    ...withMaxRowsCount(),
    [theme.breakpoints.down(300)]: {
      fontSize: 15
    }
  }
}));
