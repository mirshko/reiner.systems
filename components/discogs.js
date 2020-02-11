import useSWR, { useSWRPages } from "swr";
import fetcher from "../lib/fetcher";

const Record = ({
  basic_information: { artists, title, year, cover_image }
}) => {
  return (
    <div>
      <img
        src={cover_image}
        loading="lazy"
        height={100}
        width={100}
        alt={title}
      />

      <style jsx>{`
        img {
          display: block;
          height: 100px;
          width: 100px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

const Loader = () => (
  <div>
    <span role="img" aria-label="disk">
      💿
    </span>
    <style jsx>{`
      div {
        height: 100px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
        line-height: 48px;
        user-select: none;
      }
    `}</style>
  </div>
);

const LoadMore = props => (
  <button {...props}>
    <span role="img" aria-label="new">
      🆕
    </span>
    <style jsx>{`
      button {
        height: 100px;
        width: 100px;
        display: flex;
        border: none;
        appearance: none;
        background: transparent;
        align-items: center;
        justify-content: center;
        font-size: 48px;
        line-height: 48px;
        user-select: none;
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
    ({
      data: {
        pagination: { page, pages }
      }
    }) => (page < pages ? page + 1 : null),

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
          grid-template-columns: repeat(auto-fill, 100px);
          max-width: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Discogs;
