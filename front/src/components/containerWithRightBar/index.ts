import { useEffect, useRef, useState } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { isServer } from '../../utils/isServer';
import { ContainerWithRightBarProps } from './model';
import { View } from './view';

const DELAY = 0;

export const ContainerWithRightBar = (props: ContainerWithRightBarProps) => {
  const [sidebarTopPosition, setSidebarTopPosition] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isScrollToDown, scrollTop, previousScrollTop } = useScroll(DELAY);

  useEffect(() => {
    if (isServer() || !sidebarRef.current || !containerRef.current) {
      return;
    }
    const windowHeight = window.innerHeight;
    const sidebarHeight = sidebarRef.current.clientHeight;

    const isWindowLarger = windowHeight > sidebarHeight;

    if (isWindowLarger) {
      setSidebarTopPosition(0);
      return;
    }

    const scrollBottom = scrollTop + windowHeight;

    const sidebarTop = sidebarRef.current.offsetTop;
    const sidebarBottom = sidebarTop + sidebarHeight;

    const containerTop = containerRef.current.offsetTop;

    const scrollDelta = previousScrollTop - scrollTop;

    const sidebarTopOffset = sidebarTop - containerTop;

    if (isScrollToDown) {
      if (sidebarTopOffset > 0 && sidebarBottom > scrollBottom) {
        setSidebarTopPosition((state) => state + scrollDelta);
        return;
      }
      setSidebarTopPosition(windowHeight - sidebarHeight);
      return;
    }

    const containerHeight = containerRef.current.clientHeight;
    const containerBottom = containerTop + containerHeight;
    const sidebarBottomOffset = containerBottom - sidebarBottom;

    if (sidebarBottomOffset > 0 && sidebarTop < scrollTop) {
      setSidebarTopPosition((state) => state + scrollDelta);
      return;
    }
    setSidebarTopPosition(0);
  }, [sidebarRef.current, containerRef.current, isScrollToDown, scrollTop]);

  return View({ ...props, sidebarRef, containerRef, sidebarTopPosition });
};
