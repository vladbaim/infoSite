import { useState } from 'react';
import { useGetManyBasePostsPostQuery } from '../../../api';
import { GlobalText } from '../../../constrains';
import { getArrayOfUndefined } from '../../../utils/getArrayOfUndefined';
import { isServer } from '../../../utils/isServer';
import { ContentBoxTab } from '../../contentBox/model';
import { PostByParameterTab } from './model';
import { View } from './view';

export const PostsByParameter = () => {
  const tabItems: ContentBoxTab<PostByParameterTab>[] = [
    { key: 0, text: GlobalText.new, payload: { sort: ['createDateTime,DESC'] } },
    { key: 1, text: GlobalText.old, payload: { sort: ['createDateTime,ASC'] } }
  ];
  const [activeTabKey, setActiveTabKey] = useState<number>(tabItems[0].key);
  const activeSort = tabItems.find((tabItem) => tabItem.key === activeTabKey);

  const { data: posts, isFetching } = useGetManyBasePostsPostQuery(
    { join: ['preview||url'], limit: 5, sort: activeSort?.payload.sort },
    { skip: isServer() }
  );
  console.log(activeSort);
  const onTabClick = (itemKey: number) => {
    setActiveTabKey(itemKey);
  };

  return View<PostByParameterTab>({
    tabs: {
      items: tabItems,
      activeTabKey,
      onTabClick
    },
    posts: !isFetching && posts?.data ? posts.data : getArrayOfUndefined(5)
  });
};
