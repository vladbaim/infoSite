export interface DesktopMenuProps {
  isSticky: boolean;
}

export interface ViewProps extends DesktopMenuProps {
  currentPathname: string;
}
