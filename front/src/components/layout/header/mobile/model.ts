import { ViewProps as HeaderProps } from '../model';

export type MobileHeaderProps = HeaderProps;

export type ViewProps = MobileHeaderProps & {
  isDrawerOpen: boolean;
  toggleIsDrawerOpen: () => void;
};
