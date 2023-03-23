import { Typography } from '@mui/material';
import React from 'react';
import { FooterInfoText } from '../../../../constrains';
import { Logo } from '../../../logo';
import { LinkBoxes } from './linkBoxes';
import { FooterInfoContainer, FooterLogoAndDescBox, FooterWithSubscribeBox } from './style';
import { EmailSubscribe } from '../../../emailSubscribe';

export const View = () => (
  <FooterInfoContainer>
    <LinkBoxes />
    <FooterWithSubscribeBox display='flex' alignItems='center'>
      <FooterLogoAndDescBox display='flex'>
        <Logo />
        <Typography variant='body2'>{FooterInfoText.description}</Typography>
      </FooterLogoAndDescBox>
      <EmailSubscribe />
    </FooterWithSubscribeBox>
  </FooterInfoContainer>
);
