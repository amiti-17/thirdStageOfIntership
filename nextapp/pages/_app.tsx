import { AppProps } from 'next/app';
import RootLayout from '../components/RootLayout';
import Head from 'next/head';
import createEmotionCache from '../src/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

export interface myAppProps extends AppProps {
  emotionCache: EmotionCache;
}
  
export default function App( prop: myAppProps) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = prop;

  return (
    <RootLayout>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </RootLayout>
  )
}