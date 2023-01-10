import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "../../layouts/Nav/Nav";
import chapterActions from "../../store/chapters/actions";
import styles from "./Pages.module.css";
import { useSearchParams } from "react-router-dom";

const { getChapter } = chapterActions

function Pages() {
  const chapterStore = useSelector(state => state.chapters)
  const dispatch = useDispatch()
  const [ searchParams ] = useSearchParams()
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams])
    if (currentParams.comic_id && currentParams.order) {
      dispatch(getChapter({comic:currentParams.comic_id, chapter: currentParams.order}))
    }
  }, [searchParams])
  console.log(chapterStore);
  const getPagesImages = () => {
    if (chapterStore.chapters?.length === 0) {
      return <p>Loading...</p>
    } else {
      return chapterStore.chapters.response[0].pages?.map((page) => (
        <div className={styles.imageContainer} key={page}><img src={page} /></div>
      ))
    }
  }

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h2>{/* { chapterStore.chapters.response?.title } */}</h2>
          </div>
        </header>
        <div className={styles.comicPage}>
          {getPagesImages()}
        </div>
        <div className={styles.commentContainer}>
        Footer
        </div>
      </div>
    </>
  );
}

export default Pages;
