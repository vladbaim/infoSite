import { Box } from '@mui/material';
import { GlobalText } from '../../../constrains';
import theme from '../../../types/theme';
import { ContentBox } from '../../contentBox';
import { PostMiniView } from '../postMiniView';
import { ViewProps } from './model';

export const View = <T,>(props: ViewProps<T>) => (
  <ContentBox<T, undefined> title={GlobalText.postsByParameter} tabs={props.tabs} color={(theme) => theme.palette.primary.main}>
    <Box gap={2} display='flex' flexDirection='column'>
      {props.posts.map((post, index) => (
        <PostMiniView key={post?.id || index} post={post} />
      ))}
    </Box>
  </ContentBox>
);
