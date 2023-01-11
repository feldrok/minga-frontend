import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../layouts/Nav/Nav";
import chapterActions from "../../store/chapters/actions";
import styles from "./Pages.module.css";

/* import Carousel from "../../components/Carousel/Carousel"; */




const { getChapterDetails } = chapterActions

function Pages() {
  const chapterStore = useSelector(state => state.chapters)
  const dispatch = useDispatch()
  useEffect(() => {
    const url = window.location.href.split("/")
    const id = url[url.length - 1]
    console.log(url[url.length - 1]);
      dispatch(getChapterDetails(id))
  }, [])
  console.log(chapterStore);
  const getPagesImages = () => {
    if (chapterStore.chapters?.length === 0) {
      return <p>Loading...</p>
    } else {
      return chapterStore.chapters.response?.pages.map((page) => (
        <div className={styles.imageContainer} key={page}><img src={page} alt="Comic Page" /></div>
      ))
    }
  }
  const getChapterTitle = () => {
    if (chapterStore.chapters?.length === 0) {
      return <p>Loading...</p>
    } else {
      return <h2>{chapterStore.chapters?.response?.title}</h2>
    }
  }
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            {getChapterTitle()}
          </div>
        </header>
        <div className={styles.comicPage}>
          {getPagesImages()}
          <div className={styles.leftButton}>
          </div>
          <div className={styles.rightButton}>
          </div>
        </div>
        <div className={styles.commentContainer}>
        Footer
        </div>
      </div>
    </>
  );
}

export default Pages;
