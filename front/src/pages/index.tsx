import * as React from 'react';
import type { NextPage } from 'next';
import { PostsPuzzle } from '../components/posts/postsPuzzle';
import { ContainerWithRightBar } from '../components/containerWithRightBar';
import { ContentContainer } from '../components/contentContainer';
import { Box } from '@mui/material';
import { ContentBox } from '../components/contentBox';
import { Delete } from '@mui/icons-material';
import { PostsByParameter } from '../components/posts/postsByParameter';
import { PostsMostViewed } from '../components/posts/postsMostViewed';
import { EmailSubscribeWithText } from '../components/emailSubscribe/withText';
import { Categories } from '../components/categories';

const Home: NextPage = () => {
  return (
    <ContentContainer>
      <PostsPuzzle />
      <ContainerWithRightBar
        rightBarContent={
          <>
            <PostsByParameter /> <PostsMostViewed /> <EmailSubscribeWithText /> <Categories />
          </>
        }
      >
        <ContentBox title='Title' icon={<Delete />}>
          Content
        </ContentBox>
      </ContainerWithRightBar>
    </ContentContainer>
  );
};

export default Home;
