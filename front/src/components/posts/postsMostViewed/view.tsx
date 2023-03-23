import { MilitaryTech } from '@mui/icons-material';
import { Badge, Box } from '@mui/material';
import { GlobalText } from '../../../constrains';
import { ContentBox } from '../../contentBox';
import { PostMiniView } from '../postMiniView';
import { ViewProps } from './model';
import { TopNumberBadge } from './style';

export const View = (props: ViewProps) => (
  <ContentBox title={GlobalText.postsMostViewed} icon={<MilitaryTech />} color={(theme) => theme.palette.error.main}>
    <Box gap={2} display='flex' flexDirection='column'>
      {props.posts.map((post, index) => (
        <TopNumberBadge
          key={post?.id || index}
          badgeContent={index + 1}
          color='primary'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          place={index}
        >
          <PostMiniView post={post} />
        </TopNumberBadge>
      ))}
    </Box>
  </ContentBox>
);
