import { LinkProps } from './link/model';

export interface LinksProps {
  links: LinkProps[];
  horizontal?: boolean;
}

export type ViewProps = LinksProps;
