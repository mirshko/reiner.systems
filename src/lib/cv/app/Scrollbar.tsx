import React, { useState, useEffect, useRef } from "react";
import useResizeObserver from "use-resize-observer";
import styles from "./Scrollbar.module.css";

type ScrollbarProps = {
  scrollview: React.RefObject<HTMLDivElement | null>;
  innerChild?: React.RefObject<HTMLDivElement | null>;
  inlineStyle?: React.CSSProperties;
};
const Scrollbar: React.FC<ScrollbarProps> = ({
  scrollview,
  innerChild,
  inlineStyle,
}) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollview.current) {
      return;
    }
    let view = scrollview.current;
    const onScroll = (e: Event) => {
      if (!scrollview.current) {
        return;
      }
      setRenderCount((count) => count + 1);
    };
    onResize();
    view.addEventListener("scroll", onScroll);
    return () => view.removeEventListener("scroll", onScroll);
  }, []);

  const onResize = () => {
    let container = scrollview.current;
    if (container && container.scrollWidth > container.offsetWidth) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
    setRenderCount((count) => count + 1);
  };

  useResizeObserver({ ref: scrollview as any, onResize });
  useResizeObserver({ ref: innerChild as any, onResize });
  const barWidth = scrollview.current
    ? scrollview.current.offsetWidth / scrollview.current.scrollWidth
    : 0;
  const trackWidth = trackRef.current ? trackRef.current.offsetWidth : 0;
  const barPos = scrollview.current
    ? scrollview.current.scrollLeft /
      (scrollview.current.scrollWidth - scrollview.current.offsetWidth)
    : 0;

  if (!isScrollable) {
    return null;
  }

  return (
    <div style={inlineStyle}>
      <div ref={trackRef} className={styles.track}>
        <div
          className={styles.bar}
          style={{
            width: barWidth * 100 + "%",
            transform:
              "translateX(" + (1 - barWidth) * trackWidth * barPos + "px)",
          }}
        />
      </div>
    </div>
  );
};

export default Scrollbar;
