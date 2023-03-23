export interface SocialLinkProps {
  social: 'facebook' | 'google' | 'instagram' | 'youtube' | 'linkedin';
  href: string;
}

export interface SocialLinkConstParams {
  color: string;
  icon: JSX.Element;
}

export type ViewProps = SocialLinkConstParams & SocialLinkProps;
