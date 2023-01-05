import "./NewComic.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";

import FormComics from "../../components/FormComics/FormComics";
import Nav from "../../layouts/Nav/Nav";
import { useSelector } from "react-redux";

function NewComic() {
  const comicStore = useSelector((state) => state.comics);
  const createComicNotify = () =>
    toast.success("Comic created", { autoClose: 3000, theme: "colored" });
  const errorComicNotify = () => {
    comicStore.comics.response.map((error) =>
      toast.error(error.message, { autoClose: 3000, theme: "colored" })
    );
  };
  useEffect(() => {
    if (comicStore.comics?.success === true) {
      createComicNotify();
    }
    if (comicStore.comics?.success === false) {
      errorComicNotify();
    }
  }, [comicStore]);
  console.log(comicStore);

  return (
    <>
      <ToastContainer transition={Slide} />
      <Nav />
      <div className="container_newcomics">
        <div className="container_form">
          <FormComics />
        </div>
      </div>
    </>
  );
}

export default NewComic;

