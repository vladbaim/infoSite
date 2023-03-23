import { Theme } from '@mui/material/styles';
import { BoxProps } from '@mui/system';
import { PropsWithChildren } from 'react';

export type ContentBoxTab<T> = {
  key: number;
  text: string;
  payload: T;
};

export type ContentBoxTabs<T = undefined> = {
  items: ContentBoxTab<T>[];
  activeTabKey: number;
  onTabClick: (key: number, payload?: T) => void;
};

export type ContentBoxSlider<T = undefined> = {
  items: T[];
  defaultActive: T;
  onSliderItemSelect: (item: T) => void;
};

export type ContentBoxProps<TabPayload = undefined, SliderItem = undefined> = PropsWithChildren<{
  title?: string;
  icon?: JSX.Element;
  tabs?: ContentBoxTabs<TabPayload>;
  slider?: ContentBoxSlider<SliderItem>;
  color?: ((theme: Theme) => string) | string;
}>;

export type ViewProps<T, S> = ContentBoxProps<T, S> & {
  color: string;
  onPreviousSliderClick?: () => void;
  onNextSliderClick?: () => void;
};
