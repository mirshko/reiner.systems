const Record = ({ basic_information: { artists, title, cover_image } }) => {
  const label = title + ", " + artists[0].name;

  return (
    <div>
      <div className="cover">
        <img
          src={cover_image}
          loading="lazy"
          height={300}
          width={300}
          alt={label}
          title={label}
        />
      </div>

      <style jsx>{`
        .cover {
          box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        img {
          display: block;
          height: 15rem;
          width: 15rem;
          object-fit: cover;
        }

        p {
          margin-top: 5px;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 25px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Record;
