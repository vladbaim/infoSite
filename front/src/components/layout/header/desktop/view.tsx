import { Box, Container } from '@mui/material';
import { DateTime } from '../../../dateTime';
import { Logo } from '../../../logo';
import { SocialLinks } from '../../../socialLinks';
import { ViewProps } from './model';
import { HeaderToolbarBox } from '../style';
import { HeaderAds } from '../../../ads/headerAds';
import { DesktopMenu } from './menu';
import { HeaderBox } from '../style';

export const View = (props: ViewProps) => (
  <Box>
    <HeaderToolbarBox>
      <Container>
        <Box display='flex' alignItems='center'>
          <DateTime />
          <Box marginLeft='auto'>
            <SocialLinks />
          </Box>
        </Box>
      </Container>
    </HeaderToolbarBox>
    <Box paddingY={3}>
      <Container>
        <Box display='flex' alignItems='center' gap={20}>
          <Logo align='left' />
          <Box marginLeft='auto'>
            <HeaderAds />
          </Box>
        </Box>
      </Container>
    </Box>
    {props.isStickyHidden && <Box height={60} />}
    <HeaderBox
      ref={props.menuBoxRef}
      position={props.isStickyHidden ? 'fixed' : undefined}
      top={props.isStickyVisible ? 0 : -80}
      width='100%'
      isSticky={props.isStickyHidden}
    >
      <DesktopMenu isSticky={props.isStickyHidden} />
    </HeaderBox>
  </Box>
);
