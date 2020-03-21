import useSWR, { useSWRPages } from "swr";
import fetcher from "../lib/fetcher";
import Record from "./record";

const Loader = () => (
  <div>
    <span role="img" aria-label="disk">
      💿
    </span>
    <style jsx>{`
      div {
        height: 15rem;
        width: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        line-height: 3rem;
        user-select: none;
      }
    `}</style>
  </div>
);

const LoadMore = props => (
  <button className="enabled:hover-blink" {...props}>
    <span role="img" aria-label="new">
      🆕
    </span>
    <style jsx>{`
      button {
        height: 15rem;
        width: 15rem;
        display: flex;
        border: none;
        appearance: none;
        background: transparent;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        line-height: 3rem;
        user-select: none;
      }
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `}</style>
  </button>
);

const Discogs = () => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    "vinyl",

    // page component
    ({ offset, withSWR }) => {
      const { data } = withSWR(
        // use the wrapper to wrap the *pagination API SWR*
        useSWR("/api/get-discogs?page=" + (offset || 1), fetcher)
      );
      // you can still use other SWRs outside

      if (!data) return <Loader />;

      return data.releases.map(release => (
        <Record key={release.id} {...release} />
      ));
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

      <LoadMore
        onClick={loadMore}
        disabled={isReachingEnd || isLoadingMore}
        hidden={isReachingEnd || isLoadingMore}
      />

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(auto-fill, 15rem);
          grid-gap: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Discogs;
