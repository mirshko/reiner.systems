import Link from "next/link";

function Footer() {
  return (
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
  );
}

export default Footer;
