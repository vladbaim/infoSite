import { Email } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { EmailSubscribe } from '..';
import { GlobalText } from '../../../constrains';

export const EmailSubscribeWithText = () => (
  <Box alignItems='center' gap={2} display='flex' flexDirection='column'>
    <Box textAlign='center' alignItems='center' gap={1} display='flex' flexDirection='column'>
      <Email color='disabled' sx={{ fontSize: 50 }} />
      <Typography variant='subtitle1'>{GlobalText.subscribeUnderIcon}</Typography>
      <Box width='30%'>
        <Divider variant='middle' />
      </Box>
      <Typography variant='h5'>{GlobalText.subscribeOverText}</Typography>
      <Typography variant='caption'>{GlobalText.subscribeDescription}</Typography>
    </Box>
    <EmailSubscribe />
  </Box>
);
