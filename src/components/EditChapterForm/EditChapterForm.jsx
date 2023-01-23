import InputChapter from "../InputChapter/InputChapter";
import InputComic from "../InputComic/InputComic";
import InputData from "../InputData/InputData";
import React from "react";
import RenderInfoChapter from "../RenderInfoChapter/RenderInfoChapter";
import styles from "./EditChapterForm.module.css";
import { useRef } from "react";

const editChapter = (e) => {
  e.preventDefault();

/*   const chapter = {
    comic_id: ,
    title: ,
    order: ,
  }
 */
  
 // dispatch(createNewComic(comic));
}

const EditChapterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divContainerForm}>
        <p>Edit Chapter</p>
        <form action="" className={styles.formNewComic}  onSubmit={editChapter} > 
          <InputComic />
          <InputChapter />
          <InputData />

          <input type="submit" value="Edit" className={styles.button_edit} />
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
