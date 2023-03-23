import { useRouter } from 'next/router';
import { DesktopMenuProps } from './model';
import { View } from './view';

export const DesktopMenu = (props: DesktopMenuProps) => {
  const router = useRouter();

  return View({
    currentPathname: router.pathname,
    ...props
  });
};
