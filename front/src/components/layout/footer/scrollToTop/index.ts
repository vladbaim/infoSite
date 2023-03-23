import { useScroll } from '../../../../hooks/useScroll';
import { View } from './view';

const DELAY = 400;
const SHOW_ON_SCROLL = 100;

export const ScrollToTop = () => {
  const { scrollTop } = useScroll(DELAY);

  const onGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return View({ visible: scrollTop >= SHOW_ON_SCROLL, onGoToTop });
};
