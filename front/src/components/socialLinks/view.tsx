import { Box } from '@mui/material';
import React from 'react';
import { socialLinks } from '../../constrains';
import { SocialLink } from './socialLink';

export const View = () => (
  <Box display='flex' gap={2}>
    {socialLinks.map((socialLink, index) => (
      <SocialLink key={index} href={socialLink.href} social={socialLink.social} />
    ))}
  </Box>
);
