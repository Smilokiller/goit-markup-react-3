import React, { useState } from "react";
import styles from "./styles.module.css";
import { Modal } from "./Modal";

export function ImageGalleryItem(prop) {
  const item = prop.item;
  let imgId;
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <li
        className={styles.ImageGalleryItem}
        key={item.id}
        onClick={() => setToggler(!toggler)}
      >
        <img
          src={item.webformatURL}
          alt=""
          className={styles.ImageGalleryItemImage}
        />
        <Modal
          img={item.largeImageURL}
          item={item}
          toggler={toggler}
          id={imgId}
        />
      </li>
    </>
  );
}
