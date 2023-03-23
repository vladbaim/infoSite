import { View } from './view';
import { SocialLinkProps } from './model';
import { getConstParams } from '../../../constrains';

export const SocialLink = (props: SocialLinkProps) => {
  const constParams = getConstParams(props.social);
  return View({
    ...constParams,
    ...props
  });
};
