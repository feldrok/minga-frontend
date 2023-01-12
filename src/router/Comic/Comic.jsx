import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Chapters from "../../components/Chapters/Chapters";
import Footer from "../../layouts/Footer/Footer";
import Nav from "../../layouts/Nav/Nav";
import React from "react";
import comicActions from "../../store/comics/actions";
import styles from "./Comic.module.css";
import { useParams } from "react-router-dom";

const { getComic } = comicActions;

export default function Comic() {
  const comicStore = useSelector((store) => store.comics);
  const dispatch = useDispatch();

  const { id } = useParams();


  useEffect(() => {
    if(comicStore.comic?.length === 0) {
      dispatch(getComic(id));
      console.log(comicStore)
    }
  }, []); 

  const [chapter, setChapter] = useState(false);
  const showChapter = () => {
    setChapter(true);
  }; 

  const showManga = () => {
    setChapter(false); 
  } 
  

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        
        <div className={styles.container_img}>
          <img
            className={styles.imagen}
            src={comicStore.comic.response?.photo}
            alt={comicStore.comic.response?.photo}
          />
        </div>
        <p className={styles.title}>{comicStore.comic.response?.title}</p>
        <div className={styles.container_emojis}>
          <p className={styles.emojis}>&#128077;</p>
          <p className={styles.emojis}> &#128078;</p>
          <p className={styles.emojis}>&#128558;</p>
          <p className={styles.emojis}>&#128525;</p> 
        </div>
        <div className={styles.container_button}>
          <button className={styles.button_manga} onClick={showManga} >Manga</button>
          <button className={styles.button_chapter} onClick={showChapter}>
            Chapter
          </button>
        </div>

        <div>
          {chapter ? (
            <div className={styles.container_chapter}>
              <Chapters />
            </div>
          ) : (
            <div className={styles.container_description}>
              <p className={styles.description}>
                {comicStore.comic.response?.description}
              </p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
} 

