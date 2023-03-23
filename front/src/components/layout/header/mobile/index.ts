import { useState } from 'react';
import { MobileHeaderProps } from './model';
import { View } from './view';

export const MobileHeader = (props: MobileHeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return View({ ...props, isDrawerOpen, toggleIsDrawerOpen: () => setIsDrawerOpen((state) => !state) });
};
