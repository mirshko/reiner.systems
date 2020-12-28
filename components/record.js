import LiteYouTubeEmbed from "./lite-youtube-embed";

const Record = ({ artist, title, cover_image, video_id }) => {
  const label = title + ", " + artist;

  const hasVideo = video_id && video_id !== "null";

  return (
    <div
      className="relative select-none rounded-md overflow-hidden"
      title={label}
    >
      <div className="block absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt={label}
          async
          decoding="async"
          loading="lazy"
          src={cover_image}
          title={label}
        />
      </div>
      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
};

export default Record;
