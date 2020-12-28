import Image from "next/image";
import { BlurhashCanvas } from "react-blurhash";

const List = ({ data }) => (
  <ul className="grid gap-5 grid-cols-2 sm:grid-cols-3">
    {data.map((datum, i) => {
      const { href, label, screenshot, blurhash } = datum;

      return (
        <li key={i}>
          <a className="relative text-pink-light" href={href}>
            <div className="relative flex rounded-md overflow-hidden">
              <BlurhashCanvas
                hash={blurhash.hash}
                width={blurhash.width}
                height={blurhash.height}
                punch={1}
                className="absolute inset-0 w-full h-full rounded-md"
              />
              <Image
                alt={label}
                className="object-contain object-top rounded-md"
                height={450}
                loading="lazy"
                src={`/experiments/${screenshot}`}
                title={label}
                width={720}
              />
            </div>
            <span className="leading-none">{label}</span>
          </a>
        </li>
      );
    })}
  </ul>
);

export default List;
