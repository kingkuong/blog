import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import theme from "../theme";

interface MyAppProps extends AppProps {}
export default function App(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Component {...pageProps} />
      <Analytics mode={"production"} />
    </>
  );
}
