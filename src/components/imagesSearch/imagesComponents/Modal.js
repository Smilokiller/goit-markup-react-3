import React from "react";
import FsLightbox from "fslightbox-react";

export function Modal({ img, toggler, id }) {
  return (
    <>
      <FsLightbox toggler={toggler} sources={[img]} />
    </>
  );
}
