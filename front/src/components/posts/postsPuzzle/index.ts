import { useGetManyBasePostsPostQuery } from '../../../api';
import { isServer } from '../../../utils/isServer';
import { View } from './view';

export const PostsPuzzle = () => {
  const { data: posts } = useGetManyBasePostsPostQuery({ join: ['preview||url'], limit: 4 }, { skip: isServer() });

  return View({
    posts: posts ? posts.data.slice(0, 4) : []
  });
};
