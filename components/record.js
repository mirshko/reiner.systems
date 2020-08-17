import LiteYouTubeEmbed from "./lite-youtube-embed";

const Record = ({ artist, title, cover_image, video_id }) => {
  const label = title + ", " + artist;

  const hasVideo = video_id && video_id !== "null";

  return (
    <div className="relative overflow-hidden select-none">
      <img
        className="block h-full w-full object-contain absolute left-0 top-0"
        alt={label}
        height={314}
        importance="low"
        loading="lazy"
        src={cover_image}
        title={label}
        width={314}
      />

      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
};

export default Record;
