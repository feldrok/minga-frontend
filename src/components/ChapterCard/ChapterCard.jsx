import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from 'react-router-dom'
import React from "react";
import comicActions from "../../store/comics/actions";
import styles from "./ChapterCard.module.css";
import { useEffect } from "react";
import { useParams } from "react-router";

const { getComic } = comicActions;

const ChapterCard = ({ title }) => {

  const comicStore = useSelector((store) => store.comics);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
  dispatch(getComic(id)) 
}, []) 

  return (
    <div className={styles.container}>
      <div className={styles.container_card}>
      <div className={styles.container_img}>
        <img  className={styles.imagen} src={comicStore.comic.response?.photo} alt={title} />
      </div>
      <div className={styles.container_title}>
        <p className={styles.title}> {title} </p>
      </div>
      <div className={styles.container_button}>
        <Anchor to={"/pages"} className={styles.button}> View More </Anchor>
      </div>
      </div>
    </div>
  );
};

export default ChapterCard;
