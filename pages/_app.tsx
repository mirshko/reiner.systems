import type { AppProps } from "next/app";
import Link from "next/link";
import useFathom from "../hooks/useFathom";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  useFathom();

  return (
    <>
      <Component {...pageProps} />

      <footer className="p-5 sm:p-10 flex flex-col gap-10">
        <ul>
          <li>
            <Link href="/info">
              <a>Info</a>
            </Link>
          </li>

          <li>
            <Link href="/vinyl">
              <a>Vinyl</a>
            </Link>
          </li>

          <li>
            <a href="https://read.cv/mirshko">CV</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
