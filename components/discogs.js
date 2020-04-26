import useSWR, { useSWRPages } from "swr";
import fetcher from "../lib/fetcher";
import Record from "./record";

const LoadMore = (props) => (
  <div className="wrapper">
    <button className="enabled:hover-blink" {...props}>
      <span role="img" aria-label="new">
        ☞
      </span>
    </button>

    <style jsx>{`
      button {
        height: calc(315px - 1px);
        width: calc(315px - 1px);
        border: 1px solid;
        border-color: transparent;
        display: flex;
        appearance: none;
        background: transparent;
        align-items: center;
        justify-content: center;
        font-size: 6rem;
        line-height: 6rem;
        user-select: none;
        cursor: pointer;
        focus: none;
      }
      button:focus,
      button:hover {
        border-color: rgb(232, 232, 232);
      }
      button:disabled {
        opacity: 0.5;
        cursor: wait;
      }
      .wrapper {
        width: 315px;
        position: relative;
        margin: 0px 10px 40px;
      }
    `}</style>
  </div>
);

const Discogs = () => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    "vinyl",

    // page component
    ({ offset, withSWR }) => {
      const { data } = withSWR(
        // use the wrapper to wrap the *pagination API SWR*
        useSWR("/api/get-records?page=" + (offset || 1), fetcher)
      );
      // you can still use other SWRs outside

      if (!data) return null;

      return data.releases.map((release, i) => <Record key={i} {...release} />);
    },

    // one page's SWR => offset of next page
    ({ data: { pagination } }) =>
      pagination.page < pagination.pages ? pagination.page + 1 : null,

    // deps of the page component
    []
  );

  return (
    <section>
      {pages}

      {/* <LoadMore
        onClick={loadMore}
        disabled={isReachingEnd || isLoadingMore}
        hidden={isReachingEnd || isLoadingMore}
      /> */}

      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
          margin-left: -10px;
          margin-right: -10px;
          max-width: 1340px;
        }
      `}</style>
    </section>
  );
};

export default Discogs;
