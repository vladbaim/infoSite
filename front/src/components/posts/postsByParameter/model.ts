import { Post } from '../../../common/api.generated';
import { ContentBoxTabs } from '../../contentBox/model';

export type PostByParameterTab = {
  sort: string[];
}

export type ViewProps<T> = {
  posts: Post[] | undefined[];
  tabs: ContentBoxTabs<T>;
};
