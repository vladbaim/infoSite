import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { GlobalText } from '../../constrains';
import { View } from './view';

export const EmailSubscribe = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState<string>('');
  const [isSubscribeLoading, setIsSubscribeLoading] = useState<boolean>(false);

  const onSubscribe = async () => {
    setIsSubscribeLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    enqueueSnackbar(GlobalText.thankForSubscribe, { variant: 'success' });
    setEmail('');
    setIsSubscribeLoading(false);
  };

  return View({ email, isSubscribeLoading, onSubscribe, onEmailChange: (newEmail: string) => setEmail(newEmail) });
};
