import Image from "next/future/image";
import { RecordSchema } from "../types/record-schema";
import LiteYouTubeEmbed from "./lite-youtube-embed";

function Record({ artist, title, cover_image, video_id }: RecordSchema) {
  const label = title + ", " + artist;

  const hasVideo = !!video_id;

  return (
    <div className="relative select-none rounded-full" title={label}>
      <Image
        alt={label}
        className="object-cover aspect-square rounded-full"
        src={cover_image}
        title={label}
        width={256}
        height={256}
        draggable={false}
        unoptimized
      />

      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
}

export default Record;
