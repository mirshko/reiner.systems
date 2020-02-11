import Nav from "../components/nav";
import "../styles/reset.css";

export default function DotDesignApp({ Component, pageProps }) {
  return (
    <div className="site">
      <header>
        <Nav />
      </header>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <footer>
        <p>© 2020</p>
      </footer>

      <style jsx>{`
        .site {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        .content {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
