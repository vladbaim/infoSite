import { SmartImageProps } from '../../smartImage/model';
import { LinkProps } from '../link/model';

export type ImageLinkProps = Omit<LinkProps, 'withoutTextDecoration' | 'children'> & SmartImageProps;
