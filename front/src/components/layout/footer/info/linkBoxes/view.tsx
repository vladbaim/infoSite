import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { GlobalText, infoLinksList, tagLinks } from '../../../../../constrains';
import { LinkChip } from '../../../../../styles/chips';
import { Links } from '../../../../links';
import { Link } from '../../../../links/link';
import { ViewProps } from './model';
import { FooterLinksDividerBox, FooterLinksWrapper } from './style';

export const View = (props: ViewProps) => (
  <FooterLinksWrapper container spacing={4}>
    {infoLinksList.map((infoLinks, index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
        <Typography variant='h6' color='primary'>
          {infoLinks.label}
        </Typography>
        <FooterLinksDividerBox />
        <Links links={infoLinks.links} />
      </Grid>
    ))}
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Typography variant='h6' color='primary'>
        {GlobalText.tags}
      </Typography>
      <FooterLinksDividerBox />
      <Box display='flex' flexWrap='wrap' gap={1}>
        {tagLinks.map((tagLink, index) => (
          <Link key={index} href={tagLink.href}>
            <LinkChip variant='outlined' label={tagLink.content} />
          </Link>
        ))}
      </Box>
    </Grid>
  </FooterLinksWrapper>
);
