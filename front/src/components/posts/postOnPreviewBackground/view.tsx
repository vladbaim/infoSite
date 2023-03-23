import { Box, Skeleton, Typography } from '@mui/material';
import { Route } from '../../../constrains';
import { BackgroundImage } from '../../backgroundImage';
import { PostDateTime } from '../../dateTime/postDateTime';
import { Link } from '../../links/link';
import { ViewProps } from './model';
import { BackgroundFaderBox } from './style';

export const View = (props: ViewProps) => (
  <Link href={Route.about} withoutTextDecoration>
    <BackgroundImage src={props.post?.preview?.url} alt=''>
      <BackgroundFaderBox display='flex' flexDirection='column'>
        <Box marginTop='auto' display='flex' flexDirection='column' gap={1} overflow='hidden'>
          {props.withTime && <PostDateTime date={props.post?.createDateTime} withIcon />}
          <Box>
            <Typography variant='h4' component='h2'>
              {props.post ? (
                props.post.title
              ) : (
                <>
                  <Skeleton />
                  <Skeleton width='60%' />
                </>
              )}
            </Typography>
          </Box>
          <Typography variant='body2' className='post-on-preview-background-description'>
            {props.post ? (
              props.post.text
            ) : (
              <>
                <Skeleton />
                <Skeleton width='60%' />
              </>
            )}
          </Typography>
        </Box>
      </BackgroundFaderBox>
    </BackgroundImage>
  </Link>
);
