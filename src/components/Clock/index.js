import React from "react";
import { default as LiveClock } from "react-live-clock";

import styles from "./index.module.css";

const Clock = () => (
  <LiveClock
    format="YYYY-MM-DDTHH:mm:ss"
    className={styles.clock}
    ticking={true}
  />
);

export default Clock;
