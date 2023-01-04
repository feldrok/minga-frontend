import "./NewComic.css";

import FormComics from "../../layouts/FormComics/FormComics";
import Nav from "../../layouts/Nav/Nav";
import React from "react";

function NewComic() {
  return (
    <div className="container_newcomics">
      <div className="container_navcomics">
        <Nav />
      </div>
      <div className="container_form">
        <FormComics />
      </div>
    </div>
  );
}

export default NewComic;
