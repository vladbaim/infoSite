import { Box, Container } from '@mui/material';
import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <Box display='flex' flexDirection='column' minHeight='100vh'>
    <Header />
    <Box paddingTop={3} paddingBottom={7}>
      <Container maxWidth='lg'>{props.children}</Container>
    </Box>
    <Footer />
  </Box>
);
