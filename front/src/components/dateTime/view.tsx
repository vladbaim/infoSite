import { AccessTime } from '@mui/icons-material';
import { Box, Skeleton, Typography } from '@mui/material';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <Box display='flex' alignItems='center' gap={1} color={props.color}>
    {props.dateTime ? (
      <>
        {props.withIcon && <AccessTime fontSize='xs' />}
        <Typography variant='body2'>{props.dateTime}</Typography>
      </>
    ) : (
      <Typography variant='body2'>
        <Skeleton width={100} />
      </Typography>
    )}
  </Box>
);
