import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useScroll } from '../../../hooks/useScroll';
import { View } from './view';

const DELAY = 10;

export const Header = () => {
  const [isStickyHidden, setIsStickyHidden] = useState<boolean>(false);
  const [menuTopOffset, setMenuTopOffset] = useState<number>(0);
  const menuBoxRef = useRef<HTMLDivElement>();
  const { scrollTop, isScrollToDown } = useScroll(DELAY);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (!menuBoxRef.current) {
      return;
    }
    setMenuTopOffset(menuBoxRef.current.offsetTop);
  }, [menuBoxRef.current]);

  useEffect(() => {
    const scrolledAboveTopMenu = menuTopOffset < scrollTop;
    const scrolledAboveBottomMenu = menuTopOffset + (menuBoxRef.current?.clientHeight || 0) < scrollTop;
    if (isStickyHidden) {
      if (!scrolledAboveTopMenu) {
        setIsStickyHidden(false);
      }
    } else {
      if (scrolledAboveBottomMenu) {
        setIsStickyHidden(true);
      }
    }
  }, [menuTopOffset, scrollTop, isMobile]);

  return View({ isMobile, menuBoxRef, isStickyHidden, isStickyVisible: !isScrollToDown && isStickyHidden });
};
