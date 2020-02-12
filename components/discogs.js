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
        height={300}
        width={300}
        alt={title}
      />

      <p>{title + ", " + artists[0].name}</p>

      <style jsx>{`
        img {
          display: block;
          height: 300px;
          width: 300px;
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
        height: 300px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 128px;
        line-height: 128px;
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
        height: 300px;
        width: 300px;
        display: flex;
        border: none;
        appearance: none;
        background: transparent;
        align-items: center;
        justify-content: center;
        font-size: 128px;
        line-height: 128px;
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
          grid-template-columns: repeat(auto-fill, 300px);
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
};

export default Discogs;
