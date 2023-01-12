import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import ChapterCard from "../ChapterCard/ChapterCard";
import React from "react";
import chapterActions from "../../store/chapters/actions";
import styles from './Chapters.module.css'
import { useEffect } from "react";
import { useParams } from "react-router";

const { getChapters } = chapterActions


export default function Chapters() {
  const chapterStore= useSelector(store => store.chapters)
  
  const dispatch= useDispatch() 
  const { id } = useParams() 

useEffect(() => {
  dispatch(getChapters(id))
}, [])

  return (
    <div>
    {chapterStore.chapters.response?.map(chapter => 
      <ChapterCard 
      title={chapter.title}
      />
      )}
      <div className={styles.button_next}>
      <button className={styles.next}>Next</button>  
      </div>
    </div>
  ); 
} 

