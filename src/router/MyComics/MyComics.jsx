import "./MyComics.css";

import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Nav from "../../layouts/Nav/Nav";
import React from "react";

function Comics() {
  return (
    <>
      <Nav />
      <div className="general">
        <div className="container_nav">
          <h1>My comics</h1>
        </div>
        <div className="container_body">
          <Link to={"/newcomics"} className="link_new_comic">
            Add comic
          </Link>
        </div>
      </div>
    </>
  );
}

export default Comics;

