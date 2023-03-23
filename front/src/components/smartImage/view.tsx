import { ViewProps } from './model';
import Image from 'next/image';
import { Box, Skeleton } from '@mui/material';
import { SmartImageWrapperBox } from './style';

export const View = ({ isLoading, ...props }: ViewProps) => (
  <Box position='relative' overflow='hidden' height='100%' width='100%'>
    <SmartImageWrapperBox zIndex={1} position='absolute' height='100%' width='100%' isLoading={isLoading} />
    {props.src ? (
      <Image {...props} src={typeof props.src === 'string' && props.src.startsWith('/') ? `/api${props.src}` : props.src} />
    ) : (
      <Skeleton variant='rectangular' height='100%' width='100%' />
    )}
  </Box>
);
