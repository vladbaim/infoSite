import { Link } from '../../links/link';
import { ViewProps } from './model';
import { SocialLinkBox } from './style';

export const View = (props: ViewProps) => (
  <Link href={props.href}>
    <SocialLinkBox display='flex' alignItems='center' hoverColor={props.color}>
      {props.icon}
    </SocialLinkBox>
  </Link>
);
