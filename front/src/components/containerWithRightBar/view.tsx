import { Box, Grid } from '@mui/material';
import { ContentContainer } from '../contentContainer';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={8}>
      <Box ref={props.containerRef}>
        <ContentContainer>{props.children}</ContentContainer>
      </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
      <Box ref={props.sidebarRef} position='sticky' sx={{ top: props.sidebarTopPosition }}>
        <ContentContainer>{props.rightBarContent}</ContentContainer>
      </Box>
    </Grid>
  </Grid>
);
