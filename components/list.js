import PropTypes from "prop-types";
import { memo } from "react";
import Link from "next/link";

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
        <li key={i}>
          <a href={href}>
            <span className="thumbnail">
              <img
                alt={label}
                async
                decoding="async"
                loading="lazy"
                src={`/experiments/${screenshot}`}
              />
            </span>
            <span className="label">{label}</span>
          </a>
          &nbsp;
        </li>
      );
    })}

    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: block;
        padding-right: var(--sm);
        padding-bottom: 0.5rem;
      }

      @media screen and (min-width: 425px) {
        li {
          display: inline-block;
        }
      }

      a {
        display: inline-flex;
        align-items: start;
      }

      .label {
        flex: 1;
        line-height: 1.2;
      }

      .thumbnail {
        height: 1.3em;
        width: 1.3em;
        margin-right: 0.3em;
        box-shadow
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        vertical-align: middle;
        object-position: center 0.1em;
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
      label: PropTypes.string.isRequired,
      isInternal: PropTypes.bool,
      screenshot: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default memo(List);
