import "./MyComics.css";

import { Link } from "react-router-dom";
import Nav from "../../layouts/Nav/Nav";
import React from "react";

function Comics() {
  return (
    <>
      <div className="general">
        <div className="container_nav">
          <Nav />
        </div>
        <div className="container_link">
          <Link to={"/newcomics"} className="link_new_comic">
            Agregar Comics
          </Link>
        </div>
      </div>
    </>
  );
}

export default Comics;

