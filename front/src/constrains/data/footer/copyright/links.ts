import { Route, GlobalText } from '../../..';
import { LinksProps } from '../../../../components/links/model';

export const copyrightLinks: LinksProps['links'] = [
  {
    href: Route.index,
    content: GlobalText.main
  },
  {
    href: Route.about,
    content: GlobalText.about
  }
];
