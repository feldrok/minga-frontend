import "./NewComicForm.css";

import { useRef, useState } from "react";

import React from "react";
import comicActions from "../../store/comics/actions";
import { useDispatch } from "react-redux";

const { createNewComic } = comicActions;

function NewComicForm() {
  
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
      author_id: "63b31c4cc853e7a4ea643fbc",
      company_id: "63b1cb4db1f1ec1540d8078f",
      title: inputTitle.current.value,
      photo: inputPhoto.current.value,
      description: inputDescription.current.value,
      category: "63b31c350bddc55d435910d7",
    }; 
    
    dispatch(createNewComic(comic));
} 

  return (
    <div className="divContainerForm">
      <p>New Comic</p>
      <form action="" className="formNewComic" onSubmit={createComic}>
        <input
          type="text"
          ref={inputTitle}
          placeholder="Insert title"
          className="inpForm"
        />
        <select
          name="categories"
          className={value === "" ? "inpForm-select" : "inpForm-select selected"} 
          id="categories"
          onChange={(e) => setValue(e.target)}
        >.value
          <option className="default-select" value="">Insert category</option>
          <option value="Shonen">Comic Shonen</option>
          <option value="Sheinen">Comic Seinen</option>
          <option value="Shojo">Comic Shojo</option>
          <option value="Kodomo">Comic Kodomo</option>
        </select>
        <input
          type="text"
          ref={inputDescription}
          placeholder="Insert description"
          className="inpForm"
        />
        <input
          type="text"
          ref={inputPhoto}
          placeholder="Insert cover photo"
          className="inpForm"
        />
        <input
          type="submit"
          value="Send"
          className="button_create"
        />
      </form>
    </div>
  );
}

export default NewComicForm;