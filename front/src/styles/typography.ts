import { styled, Typography } from '@mui/material';
import { withMaxRowsCount } from './';

interface MaxRowsTypographyStylesProps {
  maxRows?: number;
}

export const MaxRowsTypography = styled(Typography, { shouldForwardProp: (prop) => prop !== 'maxRows' })<MaxRowsTypographyStylesProps>(
  ({ theme, maxRows }) => ({
    ...withMaxRowsCount(maxRows)
  })
);
