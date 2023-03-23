import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { amber, blue, deepOrange, grey, red } from '@mui/material/colors';

const themeColors: ThemeOptions = {
  palette: {
    primary: {
      main: '#08f'
    },
    secondary: {
      main: '#ff6262'
    }
  }
};

export const themeWithColors = createTheme(themeColors);

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    ...themeColors.palette,
    mode,
    ...(mode === 'light'
      ? {
          divider: grey[100],
          background: {
            paper: grey[200]
          }
        }
      : {
          divider: grey[800],
          background: {
            paper: grey[900]
          }
        })
  },
  components: {
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: 'xs' },
          style: {
            fontSize: themeWithColors.typography.body1.fontSize
          }
        }
      ]
    }
  },
});
