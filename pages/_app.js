import Nav from "../components/nav";
import useFathom from "../hooks/useFathom";
import "../styles/global.css";

function App({ Component, pageProps }) {
  useFathom();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-5 pt-5">
        <Nav />
      </header>

      <div className="flex-1 p-5">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
