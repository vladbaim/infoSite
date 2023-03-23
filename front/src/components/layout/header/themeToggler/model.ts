import { PaletteMode } from '@mui/material';

export interface ViewProps {
  currentMode: PaletteMode;
  toggleColorMode: () => void;
}
