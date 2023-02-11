import type { AppProps } from "next/app";
import "@nextjs-with-style-dictionary/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
