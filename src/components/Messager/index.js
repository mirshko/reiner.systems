import React from "react";

import styles from "./index.module.css";

const Messager = () => (
  <form
    name="contact"
    className={styles.form}
    action="/yeet/"
    netlify="true"
    netlify-honeypot="bot-field"
  >
    <p hidden>
      <input type="text" name="bot-field" />
    </p>
    <input
      required
      placeholder="email"
      type="email"
      className={styles.input}
      name="email"
    />
    <button className={styles.submit} type="submit">
      submit
    </button>
  </form>
);

export default Messager;
