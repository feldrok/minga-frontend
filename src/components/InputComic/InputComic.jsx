import { useDispatch, useSelector } from "react-redux";

import React from "react";
import comicActions from "../../store/comics/actions";
import styles from "./InputComics.module.css";
import { useEffect } from "react";

const { getComics } = comicActions;

const InputComic = () => {
  const comicsStore = useSelector((state) => state.comics);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComics());
  }, []);


  return (
    <>
      <div className={styles.container}>
        <select name="categories" id="categories">
          <option>
            Select comic
          </option>
        { comicsStore.comics?.response?.map((comic) => {
          return (
          <option className="default-select" value= "">
            {comic.title}
          </option> )
        } ) } 
        </select>
      </div>
    </>
  );
};

export default InputComic;




/* 
return (
        <>
             {comics?.map((card, index) => {

                return (
                 <Anchor to= {/comic/${card._id}} key={index} className="card">
                    <div className="rectangle">
                    </div>
                            <div className="textCard">
                                <h2 className="tittleCard">{card.title}</h2>
                                <p className="categoryText">{card.category.name}</p>
                            </div>

                            <div className="divCard">
                                <img className="imagen-card" src={card.photo} alt=""  />
                            </div>
                </Anchor>
                )
             })} 
        </>
    )

*/
