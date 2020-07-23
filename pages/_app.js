import Nav from "../components/nav";
import "../styles/reset.css";
import useFathom from "../hooks/useFathom";
import { MDXProvider } from "@mdx-js/react";

const components = {
  wrapper: ({ children, ...props }) => {
    return <main className="p-sm">{children}</main>;
  },
  h1: (props) => <h1 className="mb-md" {...props} />,
  p: (props) => <p className="mb-sm measure" {...props} />,
};

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <div className="site">
      <header>
        <Nav />
      </header>

      <div className="content">
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
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
