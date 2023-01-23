import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import React from "react";
import comicActions from "../../store/comics/actions";
import getIdComicActions from "../../store/getId/getIdAction";
import styles from "./InputComic.module.css"

const { getIdComic, getComicsById  } = getIdComicActions;
const { getComics} = comicActions;

const InputComic = () => {
  const comicsStore = useSelector((state) => state.comics);

  const [idComic, setIdComic] = useState("");
  console.log(idComic)

  const dispatch = useDispatch();

  const getValueComic = (e) => {
    setIdComic(e.target.value);
    dispatch(getIdComic(idComic));
  };
  
  useEffect(() => {
    dispatch(getComics());
  }, []);

  useEffect(() => {
    dispatch(getIdComic(idComic));  
  }, [idComic]);

  

  
  return (
    <>
      <div className="">
        <select name="categories" onChange={getValueComic} className= {styles.inpFormSelect}>
          <option>Select comic</option>
          {comicsStore.comics?.response?.map((comic) => {
            return (
              <option
                className="default-select"
                key={comic.title}
                value={comic._id}
              >
                {comic.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default InputComic;
