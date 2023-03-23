import { PostMiniViewProps } from './model';
import { View } from './view';

export const PostMiniView = (props: PostMiniViewProps) => {
  return View({ ...props });
};
