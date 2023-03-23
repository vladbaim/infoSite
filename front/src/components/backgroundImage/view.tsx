import { Box } from '@mui/material';
import { SmartImage } from '../smartImage';
import { ViewProps } from './model';

export const View = ({ children, ...props }: ViewProps) => (
  <Box position='relative' overflow='hidden' height='100%' width='100%'>
    <Box zIndex={0} height='100%' width='100%'>
      <SmartImage layout='fill' objectFit='cover' objectPosition='top center' {...props} />
    </Box>
    <Box zIndex={1} position='absolute' top={0} left={0} height='100%' width='100%'>
      {children}
    </Box>
  </Box>
);
