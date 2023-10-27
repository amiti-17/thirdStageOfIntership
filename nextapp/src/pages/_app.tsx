import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from 'createEmotionCache';
import RootLayout from 'components/RootLayout';
import { theme } from '@/src/theme';
import { useState } from 'react';
import { LoginMsgContext } from 'Contexts/loginMsgContext';

const clientSideEmotionCache = createEmotionCache();

export interface myAppProps extends AppProps {
  emotionCache: EmotionCache;
}
  
export default function App( prop: myAppProps) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = prop;
  const [ errorMsg, setErrorMsg ] = useState<string>('');
  const [ infoMsg, setInfoMsg ] = useState<string>('');

  return (
    <RootLayout>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LoginMsgContext.Provider value={{
            errorMsg, setErrorMsg,
            infoMsg, setInfoMsg
          }}>
            <Component {...pageProps} />
          </LoginMsgContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </RootLayout>
  )
}