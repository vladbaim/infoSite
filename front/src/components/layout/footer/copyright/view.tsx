import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { copyrightLinks, copyrightText } from '../../../../constrains';
import { Links } from '../../../links';
import { SocialLinks } from '../../../socialLinks';
import { ViewProps } from './model';
import { CopyrightBox, CopyrightInnerBox, CopyrightLinksBox } from './style';

export const View = (props: ViewProps) => (
  <CopyrightBox>
    <Container>
      <CopyrightInnerBox display='flex' alignItems='center'>
        <Box>
          <Typography variant='body2'>{copyrightText}</Typography>
        </Box>
        <CopyrightLinksBox display='flex' alignItems='center' gap={3} marginLeft='auto'>
          <SocialLinks />
          <Links links={copyrightLinks} horizontal />
        </CopyrightLinksBox>
      </CopyrightInnerBox>
    </Container>
  </CopyrightBox>
);
