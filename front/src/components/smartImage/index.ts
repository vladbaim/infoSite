import { useState } from 'react';
import { SmartImageProps } from './model';
import { View } from './view';

export const SmartImage = (props: SmartImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onLoadingComplete = () => {
    setIsLoading(false);
  };
  return View({
    ...props,
    isLoading,
    onLoadingComplete
  });
};
