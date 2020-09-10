import React, { Fragment } from "react";
import { TelBook } from "./telBook/TelBook";
import { ImagesSearch } from "./imagesSearch/ImagesSearch";
function App() {
  return (
    <Fragment>
      <TelBook />
      <ImagesSearch />
    </Fragment>
  );
}

export default App;
