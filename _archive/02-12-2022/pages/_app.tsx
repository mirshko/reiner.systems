import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Footer from "../components/footer";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Footer />

      <Analytics />
    </>
  );
}

export default App;
