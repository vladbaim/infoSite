import { DarkMode, LightMode } from '@mui/icons-material';
import { ViewProps } from './model';
import { ThemeModeTogglerIconButton } from './style';

export const View = (props: ViewProps) => (
  <ThemeModeTogglerIconButton onClick={props.toggleColorMode}>
    {props.currentMode === 'dark' ? <DarkMode /> : <LightMode />}
  </ThemeModeTogglerIconButton>
);
