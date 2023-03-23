import { debounce } from '@mui/material';
import { useEffect, useState } from 'react';

interface UseScrollReturn {
  scrollTop: number;
  previousScrollTop: number;
  isScrollToDown: boolean;
}

export const useScroll = (delay: number = 30): UseScrollReturn => {
  const [scroll, setScroll] = useState<UseScrollReturn>({
    scrollTop: 0,
    previousScrollTop: 0,
    isScrollToDown: true
  });

  const checkScroll = debounce(() => {
    const scrollTop = document.documentElement.scrollTop;
    setScroll((state) => ({ scrollTop, previousScrollTop: state.scrollTop, isScrollToDown: state.scrollTop < scrollTop }));
  }, delay);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return scroll;
};
