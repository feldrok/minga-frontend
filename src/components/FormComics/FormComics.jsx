import "./FormComics.css";

import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import React from "react";
import comicActions from "../../store/comics/actions";

const { createNewComic } = comicActions;

function FormComics() {
  
  const dispatch = useDispatch();

  //obtengo las referencias 
  const inputTitle = useRef("");
  const inputPhoto = useRef("");
  const inputDescription = useRef("");

  const [value, setValue] = useState("");
  console.log(value);

  //function para guardar los comics creados
  const createComic = (e) => {
    e.preventDefault();

    const comic = {
      author_id: "63b31c350bddc55d435910d7",
      company_id: "63b31c350bddc55d435910d7",
      title: inputTitle.current.value,
      photo: inputPhoto.current.value,
      description: inputDescription.current.value,
      category: "63b31c350bddc55d435910d7",
    }; 
    
    dispatch(createNewComic(comic));
}

  return (
    <>
      <form action="" className="container_form" onSubmit={createComic}>
        <input
          type="text"
          ref={inputTitle}
          placeholder="Insert title"
          className="input"
        />
        <select
          name="categories"
          className="input"
          id="categories"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Insert category</option>
          <option value="elManga">Comic manga</option>
          <option value="aventura">Adventure comic</option>
          <option value="belico">War comic</option>
          <option value="humoristico">Humorous comic</option>
          <option value="deportivo">Sports comic</option>
          <option value="fantastico">Fantastic comic</option>
          <option value="historico">Historical comic</option>
          <option value="policiaco">Police comic</option>
        </select>
        <input
          type="text"
          ref={inputDescription}
          placeholder="Insert description"
          className="input"
        />
        <input
          type="text"
          ref={inputPhoto}
          placeholder="Insert cover photo"
          className="input"
        />
        <input
          type="submit"
          value="Send"
          className="button_create"
        />
      </form>
    </>
  );
}

export default FormComics;

