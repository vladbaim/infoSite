import { useGetManyBasePostsPostQuery } from '../../../api';
import { getArrayOfUndefined } from '../../../utils/getArrayOfUndefined';
import { isServer } from '../../../utils/isServer';
import { View } from './view';

export const PostsMostViewed = () => {
  const { data: posts, isFetching } = useGetManyBasePostsPostQuery(
    { join: ['preview||url'], limit: 5, sort: ['createDateTime,ASC'] },
    { skip: isServer() }
  );

  return View({
    posts: !isFetching && posts?.data ? posts.data : getArrayOfUndefined(5)
  });
};
