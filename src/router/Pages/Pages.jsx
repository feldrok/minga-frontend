import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../layouts/Nav/Nav";
import chapterActions from "../../store/chapters/actions";
import styles from "./Pages.module.css";

const { getChapterDetails } = chapterActions

function Pages() {
  const [ current, setCurrent ] = useState(0)
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
    if (chapterStore.chapter?.length === 0) {
      return <p>Loading...</p>
    } else {
      return (
        <div className={styles.imageContainer}><img src={chapterStore.chapter.response.pages[current]} alt="Comic Page" /></div>
      )
    }
  }
  const next = () => {
    if (current !== chapterStore.chapter.response.pages?.length - 1) {
      setCurrent(current + 1)
    }
  } 
  const prev = () => {
    if (current > 0) {
      setCurrent(current -1)
    }
  }
  const getChapterTitle = () => {
    if (chapterStore.chapter?.length === 0) {
      return <p>Loading...</p>
    } else {
      return <h2>{chapterStore.chapter?.response?.title}</h2>
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
          <div className={styles.leftButton} onClick={prev}>
          </div>
          <div className={styles.rightButton} onClick={next}>
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
