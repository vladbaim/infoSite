export type ViewProps = {
  email: string;
  isSubscribeLoading: boolean;
  onEmailChange: (newEmail: string) => void;
  onSubscribe: () => void;
};
