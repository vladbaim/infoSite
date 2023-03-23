import { Box } from '@mui/material';
import React from 'react';
import { Link } from './link';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <Box display='flex' flexDirection={props.horizontal ? 'row' : 'column'} gap={props.horizontal ? 2 : 1}>
    {props.links.map(({ children, ...linkProps }, index) => (
      <Link key={index} {...linkProps}>
        {children}
      </Link>
    ))}
  </Box>
);
