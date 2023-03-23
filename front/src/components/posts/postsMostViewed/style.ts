import { Badge, styled } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';

type TopNumberBadgeStyleProps = {
  place?: number;
};

const placeSizes: CSSProperties[] = [
  {
    minWidth: 40,
    height: 40,
    fontSize: 20,
    marginTop: 10
  },
  {
    minWidth: 38,
    height: 38,
    fontSize: 19,
    marginTop: 9
  },
  {
    minWidth: 36,
    height: 36,
    fontSize: 18,
    marginTop: 8
  },
  {
    minWidth: 34,
    height: 34,
    fontSize: 16,
    marginTop: 7
  },
  {
    minWidth: 32,
    height: 32,
    fontSize: 14,
    marginTop: 6
  }
];

export const TopNumberBadge = styled(Badge)<TopNumberBadgeStyleProps>(({ theme, place }) => ({
  '& .MuiBadge-badge': {
    ...placeSizes[place || 0],
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderRadius: 20,
  }
}));
