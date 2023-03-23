import { Folder } from '@mui/icons-material';
import { Badge, Box, Skeleton, Typography } from '@mui/material';
import { GlobalText, Route } from '../../constrains';
import { ContentBox } from '../contentBox';
import { Link } from '../links/link';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <ContentBox title={GlobalText.categories} icon={<Folder />}>
    <Box gap={2} display='flex' flexDirection='column'>
      {props.categories.map((category, index) => (
        <Box key={category?.id || index} alignItems='center' display='flex'>
          <Typography variant='body2'>{category ? <Link href={Route.about}>{category.name}</Link> : <Skeleton width={120} />}</Typography>
          <Box marginLeft='auto' paddingRight={1} height={24} alignItems='center' display='flex'>
            {category ? (
              <Badge color='primary' badgeContent={category.postCount} />
            ) : (
              <Skeleton variant='circular' width={20} height={20} />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  </ContentBox>
);
