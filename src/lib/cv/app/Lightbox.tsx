import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useResizeObserver from "use-resize-observer";
import ReactDOM from "react-dom";
import isMobile from "./isMobile";
import styles from "./Lightbox.module.css";

type LightboxProps = {
  attachments: Array<any>;
  startingIndex: number;
  close: () => void;
};
const Lightbox: React.FC<LightboxProps> = ({
  attachments,
  startingIndex,
  close,
}) => {
  const [currentIndex, setCurrentIndex] = useState(startingIndex);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && isMobile() && startingIndex > 0) {
      let bounds = scrollRef.current.getBoundingClientRect();
      scrollRef.current.scrollLeft = bounds.width * startingIndex;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, []);

  const handleKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      close();
    }

    if (event.key === "ArrowRight") {
      next();
    }

    if (event.key === "ArrowLeft") {
      prev();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const next = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < attachments.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const prev = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return attachments.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    if (!attachments) {
      return;
    }
    let view = event.currentTarget;
    setCurrentIndex((_currentIndex) => {
      let index = Math.round(
        (view.scrollLeft / (view.scrollWidth - view.offsetWidth)) *
          (attachments.length - 1)
      );
      return index;
    });
  };

  return ReactDOM.createPortal(
    <div data-mobile={isMobile()} className={styles.lightbox}>
      <div
        onScroll={(event) => handleScroll(event)}
        ref={scrollRef}
        className={styles.carouselScroll}
      >
        <div className={styles.carousel}>
          {attachments.map((media, index) => {
            return (
              // @ts-expect-error Ignore
              <LightboxImage
                prev={attachments && attachments.length > 1 ? prev : undefined}
                next={attachments && attachments.length > 1 ? next : undefined}
                key={media.url}
                display={currentIndex === index || isMobile() ? true : false}
                media={media}
              />
            );
          })}
        </div>
      </div>

      {attachments && attachments.length > 1 ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 50,
          }}
          className={styles.dots}
        >
          {attachments.map((media, index) => {
            return (
              <div
                className={styles.pagerDot}
                data-active={currentIndex === index}
                key={media.url + "dot"}
              />
            );
          })}
        </motion.div>
      ) : null}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 50,
        }}
        className={styles.backdrop}
        onClick={() => close()}
      />
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 50,
        }}
        className={styles.close}
        onClick={() => close()}
      />
    </div>,
    document.body
  );
};

type LightboxImageProps = {
  media: any;
  prev?: () => void;
  next?: () => void;
  display: boolean;
};
const LightboxImage: React.FC<LightboxImageProps> = ({
  media,
  prev,
  next,
  display,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerAspectRatio, setContainerAspectRatio] = useState(
    (window.innerWidth - 48) / (window.innerHeight - 96)
  );
  const imageAspectRatio = media.width / media.height;

  let attachment =
    media.type === "image" ? (
      <img src={media.url} />
    ) : (
      <video src={media.url} autoPlay muted playsInline loop />
    );

  useEffect(() => {
    setRatio();
  }, []);

  const setRatio = () => {
    if (!containerRef.current) {
      return;
    }
    let bounds = containerRef.current.getBoundingClientRect();
    setContainerAspectRatio(bounds.width / bounds.height);
  };

  const onResize = () => {
    setRatio();
  };

  useResizeObserver({ ref: containerRef as any, onResize });

  return (
    <div
      className={styles.lightboxImage}
      style={{
        visibility: display ? "visible" : "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 50,
        }}
        ref={containerRef}
        className={styles.lightboxInner}
      >
        <div
          className={styles.imageWrap}
          style={{
            pointerEvents: display ? "all" : "none",
            aspectRatio: imageAspectRatio,
            width: containerAspectRatio > imageAspectRatio ? "auto" : "100%",
            height: containerAspectRatio > imageAspectRatio ? "100%" : "auto",
          }}
        >
          {prev && next && !isMobile() ? (
            <div className={styles.navigation}>
              <button className={styles.prev} onClick={() => prev()} />
              <button className={styles.next} onClick={() => next()} />
            </div>
          ) : null}
          {attachment}
        </div>
      </motion.div>
    </div>
  );
};

export default Lightbox;
