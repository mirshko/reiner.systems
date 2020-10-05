const Footer = () => (
  <footer className="m-4 bg-opacity-25 bg-white p-4 leading-none">
    <p>©2020</p>

    {/* Spacer */}
    <div className="h-4" />

    <div className="text-right">
      <a href="mailto:jeff@reiner.design">Email</a>
      {", "}
      <a
        href="https://twitter.com/mirshko"
        rel="noopener noreferrer"
        target="_blank"
      >
        Twitter
      </a>
      {", "}
      <a
        href="https://github.com/mirshko"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>
      {", "}
      <a
        href="https://www.instagram.com/mirshko"
        rel="noopener noreferrer"
        target="_blank"
      >
        Instagram
      </a>
    </div>
  </footer>
);

export default Footer;
