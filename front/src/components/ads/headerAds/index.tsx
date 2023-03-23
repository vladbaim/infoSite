import { Box } from '@mui/material';
import { AdsImage } from '../../../assets/images';
import { SmartImage } from '../../smartImage';

export const HeaderAds = () => (
  <Box>
    <SmartImage src={AdsImage} alt='Ads image' priority={true} />
  </Box>
);
