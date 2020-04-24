import Nav from "../components/nav";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="site">
      <header>
        <Nav />
      </header>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <footer className="px-sm pb-sm mt-lg">
        <p>
          <span>©2020</span>{" "}
          <span>
            <a href="mailto:jeff@reiner.design">Mailto</a>
          </span>
        </p>
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
