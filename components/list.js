import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @name List
 * @description Component to render a list of external links
 * @param {Array} data
 */
const List = ({ data }) => (
  <ul>
    {data.map(({ href, label }, i) => (
      <li key={i}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </li>
    ))}

    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: inline;
      }

      li::after {
        content: " ";
      }

      a {
        font-size: 2rem;
        color: darkblue;
      }

      a:visited {
        color: purple;
      }

      a:hover,
      a:focus {
        opacity: 0.5;
      }
    `}</style>
  </ul>
);

List.propTypes = {
  /**
   * Array of data to render as links
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default memo(List);
