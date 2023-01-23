import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import React from "react";
import chapterActions from "../../store/chapters/actions";
import styles from "./RenderInfoChapter.module.css"

const { getChapterDetails } = chapterActions;

const RenderInfoChapter = () => {
  const chapterStore = useSelector((state) => state?.id?.idChapter?.payload);
  console.log(chapterStore);

  const chaptersStore = useSelector((state) => state?.chapters?.chapter.response); 
  console.log(chaptersStore)

  const dispatch = useDispatch();
  

  //este despacha el chapter
  useEffect(() => {
    if (chapterStore) {
      dispatch(getChapterDetails(chapterStore));
    }
  }, [chapterStore]);
  

  return ( 
    <>
      <div className={styles.container_card} >
        <div className={styles.container_title}>
          <p> { chaptersStore?.order === undefined ? `"Choose a chapter to see the details"` : `Order: ${chaptersStore?.order}`  }  </p>
          <p className=""> { chaptersStore?.title === undefined ? null : `Title: ${chaptersStore?.title}`  }  </p>
        </div>
      </div>
    </>
  );
};

export default RenderInfoChapter;


/* 

*/