import LiteYouTubeEmbed from "./lite-youtube-embed";
import Image from "next/image";

const Record = ({ artist, title, cover_image, video_id }) => {
  const label = title + ", " + artist;

  const hasVideo = video_id && video_id !== "null";

  return (
    <div
      className="relative select-none rounded-md overflow-hidden"
      title={label}
    >
      <div className="block absolute left-0 top-0">
        <Image
          className="h-full w-full object-cover"
          alt={label}
          height={278}
          loading="lazy"
          src={cover_image}
          title={label}
          width={278}
        />
      </div>
      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
};

export default Record;
