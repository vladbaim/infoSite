import React from 'react';
import NextLink from 'next/link';
import { ViewProps } from './model';
import { Link } from './style';

export const View = (props: ViewProps) => (
  <NextLink href={props.href}>
    <Link underline='none' withoutTextDecoration={props.withoutTextDecoration}>
      {props.children}
    </Link>
  </NextLink>
);
