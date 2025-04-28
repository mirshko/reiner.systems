"use client";

import { useRef, useState, useCallback } from "react";
import Scrollbar from "./Scrollbar";
import Lightbox from "./Lightbox";
import { AnimatePresence } from "framer-motion";
import { useScrollBoost } from "react-scrollbooster";
import isMobile from "./isMobile";
import useResizeObserver from "use-resize-observer";
import styles from "./Attachments.module.css";

type AttachmentsProps = {
  attachments: Array<any>;
};
const Attachments: React.FC<AttachmentsProps> = ({ attachments }) => {
  const [lightboxState, setLightboxState] = useState({
    open: false,
    startingIndex: 0,
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const galleryHeight = 90;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [viewport, scrollbooster] = useScrollBoost({
    direction: "horizontal",
    friction: 0.05,
    scrollMode: "native",
    textSelection: false,
    onUpdate: (data) => {
      if (containerRef.current) {
        // @ts-expect-error Ignore
        containerRef.current.scrollLeft = data.position.x;
      }
    },
    shouldScroll: () => {
      return !isMobile();
    },
  });

  const setRefs = useCallback<React.RefCallback<HTMLDivElement>>(
    (node) => {
      containerRef.current = node;
      viewport(node);
      onResize();
    },
    [viewport]
  );

  const updateScrollbooster = () => {
    if (!scrollbooster || !containerRef.current) {
      return;
    }
    scrollbooster.updateMetrics();
  };

  const onResize = () => {
    updateScrollbooster();
  };

  useResizeObserver({ ref: containerRef as any, onResize });
  useResizeObserver({ ref: innerRef as any, onResize });

  let lightbox;
  if (lightboxState.open === true) {
    lightbox = (
      <Lightbox
        attachments={attachments}
        startingIndex={lightboxState.startingIndex}
        close={() =>
          setLightboxState({
            open: false,
            startingIndex: 0,
          })
        }
      />
    );
  }

  return (
    <>
      <div
        className={styles.attachments}
        style={{
          paddingTop: galleryHeight,
        }}
      >
        <div ref={setRefs} className={styles.scrollableArea}>
          <div ref={innerRef} className={styles.images}>
            {attachments.map((media, index) => {
              return (
                <Attachment
                  onClick={() =>
                    setLightboxState({
                      open: true,
                      startingIndex: index,
                    })
                  }
                  media={media}
                  key={media.url}
                  height={galleryHeight}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Scrollbar
        scrollview={containerRef}
        innerChild={scrollRef}
        inlineStyle={{ marginTop: 8 }}
      />
      <AnimatePresence>{lightbox}</AnimatePresence>
    </>
  );
};

type AttachmentProps = {
  media: any;
  height: number;
  onClick: () => void;
};
const Attachment: React.FC<AttachmentProps> = ({ media, height, onClick }) => {
  const maxWidth = 21 / 9; // ultrawide monitor
  const minWidth = 19 / 5 / 9; // iPhone

  const returnThumbnailAspectRatio = (ratio: number) => {
    if (ratio < minWidth) {
      return minWidth;
    } else if (ratio > maxWidth) {
      return maxWidth;
    } else {
      return ratio;
    }
  };

  let item;
  if (media.type === "image") {
    item = (
      <img
        alt=""
        src={media.url}
        height={height}
        width={height * returnThumbnailAspectRatio(media.width / media.height)}
      />
    );
  } else if (media.type === "video") {
    item = <video src={media.url} autoPlay loop muted playsInline />;
  }

  return (
    <div
      style={{
        height: height,
        aspectRatio: returnThumbnailAspectRatio(media.width / media.height),
      }}
      onClick={onClick}
      className={styles.media}
    >
      {item}
    </div>
  );
};

export default Attachments;
