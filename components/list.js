import Image from "next/image";

const List = ({ data }) => (
  <ul>
    {data.map((datum, i) => {
      const { href, label, screenshot } = datum;

      return (
        <li key={i} className="flex sm:inline-flex sm:mr-4">
          <a
            className="flex items-center space-x-3 text-pink-light"
            href={href}
          >
            <Image
              className="object-contain align-middle"
              alt={label}
              height={40}
              width={40}
              loading="lazy"
              src={`/experiments/${screenshot}`}
            />
            <span className="flex-1 leading-none">{label}</span>
          </a>
          &nbsp;
        </li>
      );
    })}
  </ul>
);

export default List;
