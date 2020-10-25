const List = ({ data }) => (
  <ul>
    {data.map((datum, i) => {
      const { href, label, screenshot } = datum;

      return (
        <li key={i} className="flex sm:inline-flex sm:mr-4">
          <a className="flex items-center" href={href}>
            <img
              className="h-10 w-10 mr-3 object-contain align-middle"
              alt={label}
              async
              decoding="async"
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
