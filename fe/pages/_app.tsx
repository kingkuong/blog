import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import theme from "../theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "../utilities/createEmotionCache";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
      <Analytics mode={"production"} />
    </>
  );
}
