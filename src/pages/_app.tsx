import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutProvider } from "@/context/LayoutContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <LayoutProvider>
    <Component {...pageProps} />
  </LayoutProvider>);
}
