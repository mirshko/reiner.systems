import Image from "next/image";
import { RecordSchema } from "../types/supabase";
import LiteYouTubeEmbed from "./lite-youtube-embed";

function Record({ artist, title, cover_image, video_id }: RecordSchema) {
  const label = title + ", " + artist;

  const hasVideo = !!video_id;

  return (
    <div
      className="relative select-none rounded-md overflow-hidden"
      title={label}
    >
      <div className="flex absolute inset-0">
        <Image
          alt={label}
          className="h-full w-full object-cover aspect-square"
          layout="raw"
          src={cover_image}
          title={label}
          width={300}
          height={300}
          unoptimized
        />
      </div>

      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
}

export default Record;
