import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from 'createEmotionCache';
import RootLayout from 'components/RootLayout';
import { theme } from '@/src/theme';

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