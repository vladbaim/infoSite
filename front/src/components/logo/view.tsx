import { Box, Typography } from '@mui/material';
import React from 'react';
import { Route } from '../../constrains';
import { Link } from '../links/link';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <Box display='flex' justifyContent={props.align || 'center'}>
    <Link href={Route.index}>
      <Typography component='h2' variant='h5' align='center' noWrap>
        HELLO
      </Typography>
    </Link>
  </Box>
);
