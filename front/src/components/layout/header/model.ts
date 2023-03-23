import { RefObject } from 'react';

export interface ViewProps {
  isMobile: boolean;
  isStickyVisible: boolean;
  isStickyHidden: boolean;
  menuBoxRef: RefObject<HTMLDivElement | undefined>;
}
