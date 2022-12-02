import Image from "next/future/image";
import { RecordSchema } from "../types/record-schema";
import LiteYouTubeEmbed from "./lite-youtube-embed";

function Record({ artist, title, file_name, video_id }: RecordSchema) {
  const label = title + ", " + artist;

  const hasVideo = !!video_id;

  return (
    <div className="relative select-none rounded-full">
      <Image
        alt={label}
        className="object-cover aspect-square rounded-full"
        src={`/cover_images/${file_name}`}
        width={256}
        height={256}
        draggable={false}
      />

      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
}

export default Record;
