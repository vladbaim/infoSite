import * as React from 'react';
import { AppProps } from 'next/app';
import { lighten, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { getDesignTokens, themeWithColors } from '../styles/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { wrapper } from '../store';

import { default as AbortController } from 'abort-controller';
import { Layout } from '../components/layout';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { createTheme, PaletteMode, useMediaQuery } from '@mui/material';
import { LocalStorageKeys } from '../constrains';
import { isServer } from '../utils/isServer';
import { Router } from 'next/router';
import TopBarProgress from 'react-topbar-progress-indicator';
Object.assign(globalThis, { AbortController });

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

TopBarProgress.config({
  barColors: {
    '0': lighten(themeWithColors.palette.primary.main, 0.5),
    '1.0': themeWithColors.palette.primary.main
  }
});

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyApp = (props: MyAppProps) => {
  const [progress, setProgress] = React.useState<boolean>(false);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = React.useState<PaletteMode>(prefersDarkMode ? 'light' : 'dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem(LocalStorageKeys.themeMode, newMode);
          return newMode;
        });
      }
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  React.useEffect(() => {
    if (!isServer() && localStorage.getItem(LocalStorageKeys.themeMode) !== mode) {
      colorMode.toggleColorMode();
    }
  }, []);

  Router.events.on('routeChangeStart', () => {
    setProgress(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setProgress(false);
  });

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Change title in _app.tsx</title>
            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            {progress && <TopBarProgress />}
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(MyApp);
