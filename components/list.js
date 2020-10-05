import Link from "next/link";
import PropTypes from "prop-types";

/**
 * @typedef Link
 * @description Object with the label and href for the linked work / project / etc...
 * @property {String} label
 * @property {String} href
 * @property {Boolean} isInternal
 * @property {String} screenshot
 *
 * @name List
 * @description Component to render a list of external links
 * @param {Array<Link>} data
 */
const List = ({ data }) => (
  <ul>
    {data.map(({ href, isInternal, label, screenshot }, i) => {
      if (isInternal)
        return (
          <li key={i}>
            <Link href={href}>
              <a>
                <span className="label">{label}</span>
              </a>
            </Link>{" "}
            &nbsp;
          </li>
        );

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
            <span className="flex-1 -mt-1 leading-none">{label}</span>
          </a>
          &nbsp;
        </li>
      );
    })}
  </ul>
);

List.propTypes = {
  /**
   * Array of data to render as links
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isInternal: PropTypes.bool,
      screenshot: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default List;
