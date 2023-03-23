import { Home, Info } from '@mui/icons-material';
import { GlobalText, Route } from '..';
import { LinkProps } from '../../components/links/link/model';
import { LinksProps } from '../../components/links/model';

type MainMenuLink = LinkProps & {
  icon: JSX.Element;
};

export const mainMenuLinks: MainMenuLink[] = [
  {
    href: Route.index,
    children: GlobalText.main,
    icon: <Home />
  },
  {
    href: Route.about,
    children: GlobalText.about,
    icon: <Info />
  }
];
