import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';
import { Copyright } from './copyright';
import { FooterInfo } from './info';
import { ViewProps } from './model';
import { ScrollToTop } from './scrollToTop';
import { FooterBox } from './style';

export const View = (props: ViewProps) => (
  <FooterBox component='footer'>
    <FooterInfo />
    <Copyright />
    <ScrollToTop />
  </FooterBox>
);
