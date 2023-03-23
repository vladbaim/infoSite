import { Box, Skeleton, Typography } from '@mui/material';
import { Route } from '../../../constrains';
import { MaxRowsTypography } from '../../../styles/typography';
import { PostDateTime } from '../../dateTime/postDateTime';
import { ImageLink } from '../../links/imageLink';
import { Link } from '../../links/link';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <Box display='flex' gap={2} width='100%'>
    <Box height={75} width={110} flex='none'>
      <ImageLink href={Route.about} layout='fill' objectFit='cover' objectPosition='top center' src={props.post?.preview?.url} />
    </Box>
    <Box flex='auto'>
      {props.post ? (
        <Link href={Route.about}>
          <MaxRowsTypography variant='subtitle2'>{props.post.title}</MaxRowsTypography>
        </Link>
      ) : (
        <Typography variant='subtitle2'>
          <Skeleton />
          <Skeleton width='80%' />
        </Typography>
      )}
      <Box marginTop={1}>
        <PostDateTime date={props.post?.createDateTime} withIcon color={(theme) => theme.palette.text.secondary} />
      </Box>
    </Box>
  </Box>
);
