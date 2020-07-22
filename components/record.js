import LiteYouTubeEmbed from "./lite-youtube-embed";

const Record = ({ artist, title, cover_image, video_id }) => {
  const label = title + ", " + artist;

  return (
    <div className="record">
      <div className="cover">
        <img
          alt={label}
          async
          decoding="async"
          height={314}
          importance="low"
          loading="lazy"
          src={cover_image}
          title={label}
          width={314}
        />

        {video_id && video_id !== "null" && (
          <LiteYouTubeEmbed id={video_id} title={label} />
        )}
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
          height: calc(315px - 1px);
          width: calc(315px - 1px);
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
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
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
