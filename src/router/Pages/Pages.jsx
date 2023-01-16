import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";

import Nav from "../../layouts/Nav/Nav";
import chapterActions from "../../store/chapters/actions";
import styles from "./Pages.module.css";

const { getChapterDetails, getChapters } = chapterActions;

function Pages() {
  const [current, setCurrent] = useState(0);
  const chapterStore = useSelector((state) => state.chapters);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log(_id);
  useEffect(() => {
    dispatch(getChapters("63bcc0043f33b0f658f28ca6"));
    dispatch(getChapterDetails(_id));
  }, []);
  useEffect(() => {
    const url = location.pathname.split("/");
    const id = url[url.length - 1];
    dispatch(getChapterDetails(_id));
  }, [location]);
  console.log(chapterStore);
  const getPagesImages = () => {
    if (chapterStore.chapter?.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className={styles.imageContainer}>
          <img
            src={chapterStore.chapter?.response?.pages[current]}
            alt="Comic Page"
          />
        </div>
      );
    }
  };
  const next = () => {
    if (current !== chapterStore.chapter.response.pages?.length - 1) {
      setCurrent(current + 1);
    } else {
      const nextChapter = chapterStore.chapters.response?.find(
        (chapter) => chapterStore.chapter.response?.order + 1 === chapter.order
      );
      console.log(nextChapter._id);
      navigate(`/pages/${nextChapter._id}`, { replace: true });
      setCurrent(0);
    }
  };
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else if (chapterStore.chapter?.response?.order === 1) {
      navigate(`/comics/${chapterStore.chapter?.response?.comic_id}`, {
        replace: true,
      });
    } else if (current === 0) {
      const prevChapter = chapterStore.chapters?.response?.find(
        (chapter) => chapterStore.chapter.response?.order - 1 === chapter.order
      );
      navigate(`/pages/${prevChapter._id}`, { replace: true });
      setCurrent(prevChapter.pages.length - 1);
    }
  };
  const getChapterTitle = () => {
    if (chapterStore.chapter?.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h3>{`Chapter - ${chapterStore.chapter?.response?.order}`}</h3>
          <h2>{chapterStore.chapter?.response?.title}</h2>
        </div>
      );
    }
  };
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>{getChapterTitle()}</div>
        </header>
        <div className={styles.comicPage}>
          {getPagesImages()}
          <div className={styles.leftButton} onClick={prev}></div>
          <div className={styles.rightButton} onClick={next}></div>
        </div>
        <div className={styles.commentContainer}>
          <Link
            className={styles.commentButton}
            text={"New comment"}
            to={`/pages/${chapterStore.chapter.response?._id}/newcomment`}
          ></Link>
          <img src="./icon.png" alt="" />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Pages;
