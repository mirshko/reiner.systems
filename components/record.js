const Record = ({ basic_information: { artists, title, cover_image } }) => {
  const label = title + ", " + artists[0].name;

  return (
    <div className="record">
      <div className="cover">
        <img
          src={cover_image}
          loading="lazy"
          height={300}
          width={300}
          alt={label}
        />
      </div>

      <p className="label" title={label}>
        {label}
      </p>

      <style jsx>{`
        .cover {
          border: 1px solid;
          border-color: transparent;
          overflow: hidden;
          user-select: none;
          user-drag: none;
          position: relative;
        }

        .cover:hover {
          border-color: rgb(232, 232, 232);
        }

        .label {
          margin-bottom: 10.5px;
          padding: 4px 12px 0 12px;
          margin-top: 16px;
          font-size: 12px;
          line-height: 1.33;
          color: rgb(153, 153, 153);
          font-weight: bold;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        img {
          pointer-events: none;
          border: none;
          background: white;
          box-shadow: none;
          display: block;
          height: calc(315px - 1px);
          width: calc(315px - 1px);
          object-fit: contain;
        }

        .record {
          width: 315px;
          position: relative;
          margin: 0px 10px 40px;
        }
      `}</style>
    </div>
  );
};

export default Record;
