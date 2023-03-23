import { SmartImage } from '../../smartImage';
import { Link } from '../link';
import { ImageLinkProps } from './model';
import { ImageLinkBox } from './style';

export const ImageLink = ({ href, ...imageProps }: ImageLinkProps) => (
  <Link href={href} withoutTextDecoration>
    <ImageLinkBox>
      <SmartImage {...imageProps} />
    </ImageLinkBox>
  </Link>
);
