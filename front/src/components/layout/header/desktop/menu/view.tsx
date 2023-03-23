import { DarkMode, LightMode } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { mainMenuLinks } from '../../../../../constrains';
import { Link } from '../../../../links/link';
import { ThemeToggler } from '../../themeToggler';
import { ViewProps } from './model';
import { DesktopMenuBox, DesktopMenuItemBox } from './style';

export const View = (props: ViewProps) => (
  <Container>
    <DesktopMenuBox display='flex' alignItems='center' isSticky={props.isSticky}>
      {mainMenuLinks.map((mainMenuLink, index) => (
        <Link key={index} href={mainMenuLink.href}>
          <DesktopMenuItemBox display='flex' alignItems='center' active={props.currentPathname === mainMenuLink.href}>
            <Typography variant='button'>{mainMenuLink.children}</Typography>
          </DesktopMenuItemBox>
        </Link>
      ))}
      <Box marginLeft='auto'>
        <ThemeToggler />
      </Box>
    </DesktopMenuBox>
  </Container>
);
