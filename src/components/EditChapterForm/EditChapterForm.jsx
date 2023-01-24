import "react-toastify/dist/ReactToastify.css";

import { Slide, ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import InputChapter from "../InputChapter/InputChapter";
import InputComic from "../InputComic/InputComic";
import React from "react";
import RenderInfoChapter from "../RenderInfoChapter/RenderInfoChapter";
import chapterActions from "../../store/chapters/actions";
import styles from "./EditChapterForm.module.css";
import { useEffect } from "react";

const { getChapterDetails } = chapterActions;

const EditChapterForm = () => {
  const chaptersStore = useSelector(
    (state) => state?.chapters?.chapter.response
  );
  console.log(chaptersStore);

  const chapterStore = useSelector((state) => state);
  console.log(chapterStore?.chapters?.message); //este console.log me trae los mensajes de que si chapter se ha editado

  const inputData = useRef("");

  const [category, setCategory] = useState("");

  const { editChapter, deleteChapter } = chapterActions;

  const dispatch = useDispatch();

  const getValueCategory = (e) => {
    setCategory(e.target.value);
  };

  const editChapterNotify = () =>
    toast.success(chapterStore?.chapters?.message, {
      autoClose: 3000,
      theme: "colored",
    });
  const errorEditChapterNotify = () => {
    toast.error(chapterStore?.chapters?.message, {
      autoClose: 3000,
      theme: "colored",
    });
  };


  useEffect(() => {
    console.log("ALGOOOOOOO");
    if (chapterStore?.chapters?.updateChapter?.success === true) {
      editChapterNotify();
    }
    if (chapterStore?.chapters?.updateChapter?.success === false) {
      errorEditChapterNotify();
    }
  }, [chapterStore?.chapters?.message]);
  console.log(chapterStore?.chapters?.updateChapter?.success)



  //delete chapter toast

  
  const deleteChapterNotify = () =>
    toast.success(chapterStore?.chapters?.message, {
      autoClose: 3000,
      theme: "colored",
    });
  const deleteErrorChapterNotify = () => {
    toast.error(chapterStore?.chapters?.message, {
      autoClose: 3000,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (chapterStore?.chapters?.deleteChapter?.success === true) {
      deleteChapterNotify();
    }
    if (chapterStore?.chapters?.deleteChapter?.success === false) {
      deleteErrorChapterNotify();
    }
  }, [chapterStore?.chapters?.message]);

  console.log(chapterStore?.chapters?.deleteChapter?.success)



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
    await dispatch(getChapterDetails(chapter.id)); //vuelvo a despechar los detallles del chapter para que se rendericen devuelta
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
    <>
        <ToastContainer transition={Slide} />
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
          </form>
        </div>
        <div className={styles.chapter}>
          <RenderInfoChapter />
        </div>
      </div>
    </>
  );
};

export default EditChapterForm;
