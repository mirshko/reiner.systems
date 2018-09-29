import React from "react";
import Scroll from "react-scroll";

import styles from "./index.module.css";

const scroll = Scroll.animateScroll;

const Up = () => (
  <div className={styles.upWrapper}>
    <button
      className={styles.upBox}
      onClick={() =>
        scroll.scrollToTop({
          smooth: "easeInOutQuint"
        })
      }
    >
      <span role="img" aria-label="up">
        👆
      </span>
    </button>
  </div>
);

export default Up;
