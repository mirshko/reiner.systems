import Head from "next/head";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../styles/yt-lite.module.css";

function PlayButton() {
  return (
    <svg viewBox="0 0 68 48">
      <path
        className={styles.btn}
        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
      />
      <path d="M45 24L27 14v20" fill="#fff" />
    </svg>
  );
}

function LiteYouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [preconnected, setPreconnected] = useState(false);

  const [iframe, setIframe] = useState(false);

  const videoId = encodeURIComponent(id);

  const videoTitle = title;

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0`;

  const ref = useRef<HTMLDivElement>(null);

  const warmConnections = useCallback(() => {
    if (preconnected) {
      return;
    }

    setPreconnected(true);
  }, [preconnected, setPreconnected]);

  const addIframe = useCallback(() => {
    if (iframe) {
      return;
    }

    setIframe(true);
  }, [iframe, setIframe]);

  useEffect(() => {
    const current = ref.current;

    current?.addEventListener("pointerover", warmConnections, true);
    current?.addEventListener("click", addIframe, true);

    return () => {
      current?.removeEventListener("pointerover", warmConnections);
      current?.removeEventListener("click", addIframe);
    };
  }, [ref, warmConnections, addIframe]);

  return (
    <Fragment>
      {preconnected && (
        <Head>
          <link
            key="lyt-youtube-nocookie"
            rel="preconnect"
            href="https://www.youtube-nocookie.com"
          />
          <link
            key="lyt-google"
            rel="preconnect"
            href="https://www.google.com"
          />
        </Head>
      )}

      <div
        className={`${styles.yt} ${iframe && styles.activated}`}
        data-title={videoTitle}
        ref={ref}
      >
        <div className={styles.playbtn}>
          <PlayButton />
        </div>

        {iframe && (
          <iframe
            title={videoTitle}
            width={314}
            height={314}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src={iframeSrc}
          />
        )}
      </div>
    </Fragment>
  );
}

export default LiteYouTubeEmbed;
