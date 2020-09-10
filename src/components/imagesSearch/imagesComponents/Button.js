import React from "react";
import styles from "./styles.module.css";

export function Button(prop) {
  return (
    <>
      <button className={styles.Button} onClick={prop.onClick}>
        Load more
      </button>
    </>
  );
}
