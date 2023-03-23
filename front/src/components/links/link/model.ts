import { PropsWithChildren } from 'react';
import { Route } from '../../../constrains';

export type LinkProps = PropsWithChildren<{
  href: Route | string;
  withoutTextDecoration?: boolean;
}>

export type ViewProps = LinkProps;
