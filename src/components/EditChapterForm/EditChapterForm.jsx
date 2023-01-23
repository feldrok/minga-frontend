import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import InputChapter from "../InputChapter/InputChapter";
import InputComic from "../InputComic/InputComic";
import InputData from "../InputData/InputData";
import React from "react";
import RenderInfoChapter from "../RenderInfoChapter/RenderInfoChapter";
import chapterActions from "../../store/chapters/actions";
import styles from "./EditChapterForm.module.css";

const EditChapterForm = () => {
  const chaptersStore = useSelector(
    (state) => state?.chapters?.chapter.response
  );
  console.log(chaptersStore);

  const inputData = useRef("");
  const inputCategory = useRef("");
  const [category, setCategory] = useState("");
  const { editChapter } = chapterActions;

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
    console.log(inputData);
  }; 

  return (
    <div className={styles.container}>
      <div className={styles.divContainerForm}>
        <p>Edit Chapter</p>
        <form action="" className={styles.formNewComic}>
          <InputComic />
          <InputChapter />
          <InputData />
          <div>
            <select name="categories" className={styles.inpFormSelect} onChange={getValueCategory} >
              <option className="default-select">
                Selec data
              </option>
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
          <input
            type="submit"
            value="Delete"
            className={styles.button_delete}
          />
        </form>
      </div>
      <div className={styles.chapter}>
        <RenderInfoChapter />
      </div>
    </div>
  );
};

export default EditChapterForm;
