import Footer from "../components/footer";
import MDX from "../components/mdx";
import Nav from "../components/nav";
import useFathom from "../hooks/useFathom";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <div className="site">
      <header>
        <Nav />
      </header>

      <div className="content">
        <MDX>
          <Component {...pageProps} />
        </MDX>
      </div>

      <Footer />

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
