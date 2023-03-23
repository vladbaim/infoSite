import { type } from 'os';
import { PropsWithChildren, RefObject } from 'react';

export type ContainerWithRightBarProps = PropsWithChildren<{
  rightBarContent?: JSX.Element;
}>;

export type ViewProps = ContainerWithRightBarProps & {
  sidebarRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  sidebarTopPosition: number;
};