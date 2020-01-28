import { Fragment } from "react";
import Nav from "../components/nav";
import "../styles/reset.css";

export default function DotDesignApp({ Component, pageProps }) {
  return (
    <Fragment>
      <header>
        <Nav />
      </header>
      <Component {...pageProps} />
      <footer>
        <p>© 2020</p>
      </footer>
    </Fragment>
  );
}
