import { Post } from '../../../common/api.generated';

export type PostOnPreviewBackgroundProps = {
  post?: Post;
};

export type ViewProps = PostOnPreviewBackgroundProps & {
  withTime: boolean;
};

export const postOnPreviewBackgroundDescriptionClassName = 'post-on-preview-background-description';