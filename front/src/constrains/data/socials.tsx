import { CloseOutlined, Facebook, Google, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Route } from '..';
import { SocialLinkConstParams, SocialLinkProps } from '../../components/socialLinks/socialLink/model';

interface SocialLink {
  href: string;
  social: SocialLinkProps['social'];
}

export const socialLinks: SocialLink[] = [
  {
    href: Route.about,
    social: 'google'
  },
  {
    href: '',
    social: 'linkedin'
  },
  {
    href: '',
    social: 'instagram'
  },
  {
    href: '',
    social: 'youtube'
  },
  {
    href: '',
    social: 'facebook'
  }
];

export const getConstParams = (social: SocialLinkProps['social']): SocialLinkConstParams => {
  switch (social) {
    case 'facebook':
      return {
        color: 'dodgerblue',
        icon: <Facebook fontSize='xs' />
      };
    case 'google':
      return {
        color: 'green',
        icon: <Google fontSize='xs' />
      };
    case 'linkedin':
      return {
        color: 'deeppink',
        icon: <LinkedIn fontSize='xs' />
      };
    case 'instagram':
      return {
        color: 'orange',
        icon: <Instagram fontSize='xs' />
      };
    case 'youtube':
      return {
        color: 'red',
        icon: <YouTube fontSize='xs' />
      };
    default:
      return {
        color: 'red',
        icon: <CloseOutlined fontSize='xs' />
      };
  }
};
