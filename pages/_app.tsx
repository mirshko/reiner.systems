import type { AppProps } from "next/app";
import useFathom from "../hooks/useFathom";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  useFathom();

  return <Component {...pageProps} />;
}

export default App;
