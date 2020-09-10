import React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import styles from "./styles.module.css";

export function ImageGallery(prop) {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {prop.gallery.map((el) => (
          <ImageGalleryItem item={el} toogleModal={prop.toogleModal} />
        ))}
      </ul>
    </>
  );
}
