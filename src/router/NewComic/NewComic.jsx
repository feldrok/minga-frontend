import "./NewComic.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";

import Nav from "../../layouts/Nav/Nav";
import NewComicForm from "../../components/NewComicForm/NewComicForm";
import { useSelector } from "react-redux";

function NewComic() {

  const comicStore = useSelector((state) => state.comics); 

  const createComicNotify = () =>
    toast.success("Comic created", { autoClose: 3000, theme: "colored" });
  const errorComicNotify = () => {
    comicStore.comics.response?.map((i) =>  
    toast.error(i.message, { autoClose: 3000, theme: "colored" })
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
          <NewComicForm />
        </div>
      </div>
    </>
  );
}

export default NewComic;

