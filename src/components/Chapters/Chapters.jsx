import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link as Anchor } from "react-router-dom";
import ChapterCard from "../ChapterCard/ChapterCard";
import React from "react";
import chapterActions from "../../store/chapters/actions";
import styles from "./Chapters.module.css";
import { useParams } from "react-router";

const { getChapters } = chapterActions;

export default function Chapters() {
  const chapterStore = useSelector((store) => store.chapters);
  const [pages, setPages] = useState(1);
  const chapterDetail = chapterStore.chapters.response;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getChapters({ id, pages }));
  }, [pages]);

  const next = () => {
    setPages(pages + 1);
  };

  const prev = () => {
    setPages(pages - 1);
  };

  return (
    <div>
      {chapterStore.chapters.response?.length === 0 ? (
        <h2 className={styles.mensaje}> Sorry, this manga has no chapters </h2>
      ) : (
        <div>
          {chapterStore.chapters.response?.map((chapter) => (
            <ChapterCard title={chapter.title} chapterId={chapter._id} />
          ))}
          <div className={styles.button_next}>
            {pages === 1 ? null : (
              <button className={styles.next} onClick={prev}>
                Prev
              </button>
            )}
            {chapterDetail?.length < 5 ? null : (
              <button className={styles.next} onClick={next}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
