import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { InputAdornment, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { GlobalText } from '../../constrains';
import { ViewProps } from './model';
import { SubscribeFormControl } from './style';

export const View = (props: ViewProps) => (
  <SubscribeFormControl variant='outlined' fullWidth>
    <TextField
      value={props.email}
      placeholder={GlobalText.subscribePlaceholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Email color='disabled' />
          </InputAdornment>
        )
      }}
      size='small'
      disabled={props.isSubscribeLoading}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.onEmailChange(e.target.value)}
    />
    <LoadingButton loading={props.isSubscribeLoading} disabled={!props.email} onClick={props.onSubscribe} variant='contained'>
      {GlobalText.subscribe}
    </LoadingButton>
  </SubscribeFormControl>
);
