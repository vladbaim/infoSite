import { DateTimeFormat } from '../../../constrains';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { formatDate } from '../../../utils/formatDate';
import { PostOnPreviewBackgroundProps } from './model';
import { View } from './view';

export const PostOnPreviewBackground = (props: PostOnPreviewBackgroundProps) => {
  const isMobile = useIsMobile('sm');

  return View({
    ...props,
    withTime: !isMobile
  });
};
