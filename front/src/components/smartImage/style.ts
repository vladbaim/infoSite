import { Box, keyframes, styled } from '@mui/material';

const loading = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

type SmartImageWrapperBoxStyleProps = {
  isLoading?: boolean;
};

export const SmartImageWrapperBox = styled(Box)<SmartImageWrapperBoxStyleProps>(({ theme, isLoading }) => ({
  backgroundColor: isLoading ? theme.palette.background.paper : 'transparent',
  transitionProperty: 'background-color',
  transitionDuration: '0.5s',
  animation: `${loading} 1.5s ease-in-out 0.5s infinite`
}));
