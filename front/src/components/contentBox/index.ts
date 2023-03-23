import { View } from './view';
import { ContentBoxProps } from './model';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

export const ContentBox = <T, S>(props: ContentBoxProps<T, S>) => {
  const theme = useTheme();
  const [sliderItemIndex, setSliderItemIndex] = useState<number>(props.slider ? props.slider.items.indexOf(props.slider.defaultActive) : 0);
  const color = (typeof props.color === 'function' ? props.color(theme) : props.color) || theme.palette.text.primary;

  const onPreviousSliderClick = () => {
    if (!props.slider) {
      return;
    }
    setSliderItemIndex((state) => state - 1);
  };

  const onNextSliderClick = () => {
    if (!props.slider) {
      return;
    }
    setSliderItemIndex((state) => state + 1);
  };

  useEffect(() => {
    if (!props.slider) {
      return;
    }
    props.slider.onSliderItemSelect(props.slider.items[sliderItemIndex]);
  }, [sliderItemIndex]);

  return View<T, S>({
    ...props,
    color,
    onPreviousSliderClick: !!props.slider && sliderItemIndex > 0 ? onPreviousSliderClick : undefined,
    onNextSliderClick: !!props.slider && sliderItemIndex < props.slider.items.length - 1 ? onNextSliderClick : undefined
  });
};
