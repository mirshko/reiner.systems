import cn from "classnames";
import { readFile } from "fs/promises";
import { InferGetStaticPropsType } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { join } from "path";
import { useEffect, useState } from "react";
import SEO from "../components/seo";
import type { RecordSchema } from "../types/record-schema";

function VinylPage({
  records,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [index, indexSet] = useState(0);

  const [playing, playingSet] = useState(false);

  useEffect(() => {
    playingSet(false);
  }, [index]);

  const togglePlay = () => {
    playingSet((state) => !state);
  };

  return (
    <main>
      <SEO title="Vinyl" path="/vinyl" />

      <Head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </Head>

      <div className="fixed top-5 left-5 z-50">
        <Link href="/">
          <a className="inline-flex px-5 text-white bg-white/10 rounded-full">
            Back
          </a>
        </Link>
      </div>

      <section className="full-height-and-centered gap-10">
        <div className="self-end h-80 w-80 flex relative items-center justify-center select-none">
          <div className="relative h-80 w-80 rounded-full ring-2 ring-white/20 flex items-center justify-center">
            <Image
              key={index}
              alt={records[index].title}
              className={cn(
                "object-cover aspect-square rounded-full motion-safe:animate-spin-33",
                playing
                  ? "motion-safe:[animation-play-state:running]"
                  : "motion-safe:[animation-play-state:paused]"
              )}
              src={`/cover_images/${records[index].file_name}`}
              width={320}
              height={320}
              draggable={false}
              priority
            />
            <div
              aria-hidden="true"
              role="presentation"
              className="absolute inset-8 rounded-full border border-black"
            />
            <div
              aria-hidden="true"
              role="presentation"
              className="absolute inset-16 rounded-full border border-black"
            />
            <div
              aria-hidden="true"
              role="presentation"
              className="absolute h-2 w-2 rounded-full bg-black"
            />
          </div>
          <button
            onClick={togglePlay}
            className="bg-black/50 rounded-full px-5 absolute z-1"
          >
            {playing ? "Pause" : "Play"}
          </button>

          {playing && (
            <iframe
              className="hidden"
              width={0}
              height={0}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              src={`https://www.youtube-nocookie.com/embed/${records[index].video_id}?autoplay=1&controls=1`}
            />
          )}
        </div>

        <div className="self-start relative w-full flex gap-5 snap-x overflow-x-auto pt-5 pb-5">
          {records.map((release, i) => (
            <div
              key={i}
              className="snap-center shrink-0 first:pl-10 last:pr-10"
            >
              <button
                className="flex relative transition-transform hover:-translate-y-2.5 duration-200"
                onClick={() => indexSet(i)}
                disabled={!release.video_id}
              >
                <Image
                  alt={release.title}
                  className={cn(
                    "object-cover aspect-square rounded",
                    release.video_id ? "" : "opacity-20"
                  )}
                  src={`/cover_images/${release.file_name}`}
                  width={128}
                  height={128}
                  draggable={false}
                />
                <div
                  className={cn(
                    "absolute inset-0 rounded border-2 to-white/20 from-transparent bg-gradient-to-br",
                    i === index ? "border-magenta" : "border-white/20"
                  )}
                />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const records = JSON.parse(
    await readFile(join(process.cwd(), "vinyl.json"), {
      encoding: "utf8",
    })
  ) as RecordSchema[];

  const playable_first = records.sort((a, b) => {
    if (typeof a.video_id === "string" && !b.video_id) return -1;
    if (typeof b.video_id === "string" && !a.video_id) return 1;
    if (new Date(a.date_added) > new Date(b.date_added)) return -1;
    if (new Date(a.date_added) < new Date(b.date_added)) return 1;
    return 0;
  });

  return {
    props: {
      records: playable_first,
    },
  };
}

export default VinylPage;
