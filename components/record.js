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
          border-radius: 3px;
          overflow: hidden;
          user-select: none;
          user-drag: none;
          position: relative;
        }

        img {
          pointer-events: none;
          border: none;
          border-radius: 3px;
          background: black;
          box-shadow: none;
          display: block;
          height: 15rem;
          width: 15rem;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Record;
