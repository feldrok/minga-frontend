import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import InputChapter from "../InputChapter/InputChapter";
import InputComic from "../InputComic/InputComic";
import React from "react";
import RenderInfoChapter from "../RenderInfoChapter/RenderInfoChapter";
import chapterActions from "../../store/chapters/actions";
import getIdActions from "../../store/getId/getIdAction";
import styles from "./EditChapterForm.module.css";
import { useEffect } from "react";

const { reloadChapter } = getIdActions;

const EditChapterForm = () => {
  const chaptersStore = useSelector(
    (state) => state?.chapters?.chapter.response
  );
  console.log(chaptersStore);


 const reloadStore = useSelector((state) => state?.chapters?.updateChapter);
  console.log(reloadStore?.response?.title); 

  const inputData = useRef("");

  const [category, setCategory] = useState("");

  const { editChapter, deleteChapter } = chapterActions;

  const dispatch = useDispatch();

  const getValueCategory = (e) => {
    setCategory(e.target.value);
  };

  const editsChapter = async (e) => {
    e.preventDefault();

    const chapter = {
      comic_id: chaptersStore.comic_id,
      id: chaptersStore._id,
      title: chaptersStore.title,
      order: chaptersStore.order,
      data: inputData.current.value,
      category: category,
    };
    await dispatch(editChapter(chapter));

    await dispatch(reloadChapter(chapter.data)); 
    console.log(chapter.data) 
    //hacer otroDispatch
  };



  const deletChapter = async (e) => {
    console.log(e);
    e.preventDefault();

    const chapter = {
      id: chaptersStore._id,
    };
    await dispatch(deleteChapter(chapter));
  };

  return (
    <div className={styles.container}>
      <div className={styles.divContainerForm}>
        <p>Edit Chapter</p>
        <form action="" className={styles.formNewComic}>
          <InputComic />
          <InputChapter />
          <div>
            <select
              name="categories"
              className={styles.inpFormSelect}
              onChange={getValueCategory}
            >
              <option className="default-select">Selec data</option>
              <option value="title">Title</option>
              <option value="pages">Pages</option>
              <option value="order">Order</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="data to edit"
              className={styles.inpFormSelect}
              ref={inputData}
            ></input>
          </div>
          <input
            type="submit"
            value="Edit"
            className={styles.button_edit}
            onClick={editsChapter}
          />
          <button className={styles.button_delete} onClick={deletChapter}>
            Delete
          </button>

          {/* <input type="submit" value="Delete" /> */}
        </form>
      </div>
      <div className={styles.chapter}>
        <RenderInfoChapter />
      </div>
    </div>
  );
};

export default EditChapterForm;
