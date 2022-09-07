import Image from "next/future/image";
import { RecordSchema } from "../types/record-schema";
import LiteYouTubeEmbed from "./lite-youtube-embed";

function Record({ artist, title, cover_image, video_id }: RecordSchema) {
  const label = title + ", " + artist;

  const hasVideo = !!video_id;

  return (
    <div className="relative select-none rounded-md" title={label}>
      <Image
        alt={label}
        className="absolute w-full h-full inset-0 object-cover aspect-square rounded-md bg-black"
        // onLoad={(e) => {
        //   (e.target as HTMLImageElement).classList.add("animate-ken-burns");
        // }}
        src={cover_image}
        title={label}
        width={300}
        height={300}
        draggable={false}
        unoptimized
      />

      {hasVideo && <LiteYouTubeEmbed id={video_id} title={label} />}
    </div>
  );
}

export default Record;
