import { Menu } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import { mainMenuLinks } from '../../../../constrains';
import { HeaderAds } from '../../../ads/headerAds';
import { DateTime } from '../../../dateTime';
import { Link } from '../../../links/link';
import { Logo } from '../../../logo';
import { SocialLinks } from '../../../socialLinks';
import { HeaderBox, HeaderToolbarBox } from '../style';
import { ThemeToggler } from '../themeToggler';
import { ViewProps } from './model';

export const View = (props: ViewProps) => (
  <>
    {props.isStickyHidden && <Box height={60} />}
    <HeaderBox
      isColored
      ref={props.menuBoxRef}
      position={props.isStickyHidden ? 'fixed' : undefined}
      top={props.isStickyVisible ? 0 : -80}
      width='100%'
      isSticky={props.isStickyHidden}
      display='flex'
      alignItems='center'
    >
      <Container>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={3}>
            <IconButton onClick={props.toggleIsDrawerOpen}>
              <Menu />
            </IconButton>
          </Grid>
          <Grid item xs={6} display='flex' justifyContent='center'>
            <Logo />
          </Grid>
          <Grid item xs={3} display='flex' justifyContent='right'>
            <ThemeToggler />
          </Grid>
        </Grid>
      </Container>
    </HeaderBox>
    <Container>
      <Box display='flex' paddingTop={2} justifyContent='center'>
        <HeaderAds />
      </Box>
    </Container>
    <SwipeableDrawer open={props.isDrawerOpen} onClose={props.toggleIsDrawerOpen} onOpen={props.toggleIsDrawerOpen}>
      <Box width={250} height='100%' display='flex' flexDirection='column'>
        <HeaderToolbarBox display='flex' justifyContent='center'>
          <DateTime />
        </HeaderToolbarBox>
        <List>
          {mainMenuLinks.map((mainMenuLink, index) => (
            <Link key={index} href={mainMenuLink.href}>
              <ListItem button onClick={props.toggleIsDrawerOpen}>
                <ListItemIcon>{mainMenuLink.icon}</ListItemIcon>
                <ListItemText primary={mainMenuLink.children} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Box display='flex' marginTop='auto' paddingY={3} justifyContent='center'>
          <SocialLinks />
        </Box>
      </Box>
    </SwipeableDrawer>
  </>
);
