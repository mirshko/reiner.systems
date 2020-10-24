import LiteYouTubeEmbed from "./lite-youtube-embed";

const Record = ({ artist, title, cover_image, video_id }) => {
  const label = title + ", " + artist;

  const hasVideo = video_id && video_id !== "null";

  return (
    <div
      className="relative select-none rounded-md overflow-hidden"
      title={label}
    >
      <img
        className="block absolute left-0 top-0 h-full w-full object-cover"
        alt={label}
        height={330.66}
        importance="low"
        loading="lazy"
        async
        decoding="async"
        src={cover_image}
        title={label}
        width={330.66}
      />

      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
};

export default Record;
