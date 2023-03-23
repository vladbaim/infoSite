import { KeyboardArrowUp } from '@mui/icons-material';
import { ViewProps } from './model';
import { ScrollToTopBox, ScrollToTopButton } from './style';

export const View = (props: ViewProps) => (
  <ScrollToTopBox visible={props.visible}>
    <ScrollToTopButton color='primary' variant='contained' onClick={props.onGoToTop}>
      <KeyboardArrowUp />
    </ScrollToTopButton>
  </ScrollToTopBox>
);
