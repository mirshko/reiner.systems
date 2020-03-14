import PropTypes from "prop-types";
import { memo } from "react";

/**
 * @typedef Link
 * @description Object with the label and href for the linked work / project / etc...
 * @property {String} label
 * @property {String} href
 *
 * @name List
 * @description Component to render a list of external links
 * @param {Array<Link>} data
 */
const List = ({ data }) => (
  <ul>
    {data.map(({ href, label }, i) => (
      <li key={i}>
        <a href={href}>
          <span className="thumbnail">
            <img
              src={`https://picsum.photos/seed/${label}/160/104`}
              loading="lazy"
              height={104}
              width={160}
              alt=""
            />
          </span>
          <span className="label">{label}</span>
        </a>
        &nbsp;
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

      a {
        display: inline-flex;
        align-items: baseline;
        font-size: 1rem;
        color: darkblue;
      }

      .label {
        line-height: 1.2;
      }

      .thumbnail {
        height: 1.3em;
        width: 1.3em;
        text-align: center;
        display: inline-block;
        margin-right: 0.2em;
      }

      img {
        max-height: 100%;
        max-width: 100%;
        height: auto;
        width: auto;
        vertical-align: middle;
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
