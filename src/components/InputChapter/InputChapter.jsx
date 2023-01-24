/* import "react-toastify/dist/ReactToastify.css"; */

import { Slide, ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import React from "react";
import chapterActions from "../../store/chapters/actions";
import getIdActions from "../../store/getId/getIdAction";
import styles from "./InputChapter.module.css";

const { getChapters } = chapterActions;
const { getIdChapter } = getIdActions;

const InputChapter = () => {
  const idComicStore = useSelector((state) => state?.id?.idComic?.payload);
  console.log(idComicStore);

  const chaptersStore = useSelector((state) => state?.chapters);
  console.log(chaptersStore); //este console.log me trae los mensajes de que si chapter se ha editado

  const [idChapter, setIdChapter] = useState(null);
  console.log(idChapter);

  const dispatch = useDispatch();

/*   const createComicNotify = () =>
    toast.success(chaptersStore?.message, {
      autoClose: 3000,
      theme: "colored",
    });
  const errorComicNotify = () => {
    toast.error("Error edit chapter", { autoClose: 3000, theme: "colored" });
  }; */

/*   useEffect(() => {
    if (chaptersStore?.message === true) {
      createComicNotify();
    }
    if (chaptersStore?.message === false) {
      errorComicNotify() 
    }
  }, [chaptersStore]);
  console.log(chaptersStore)  */


  // funcion obtener el valor del input del chapter
  const getValueChapter = (e) => {
    setIdChapter(e.target.value);
    dispatch(getIdChapter(idChapter));
  };

  useEffect(() => {
    if (idComicStore) {
      dispatch(getChapters({ id: idComicStore, limit: 0 }));
    }
  }, [idComicStore]);

  useEffect(() => {
    dispatch(getIdChapter(idChapter));
  }, [idChapter]);

  return (
    <>
      <ToastContainer transition={Slide} />
      <div className="">
        <select
          name="categories"
          onChange={getValueChapter}
          className={styles.inpFormSelect}
        >
          {<option>Select chapter</option>}
          {chaptersStore?.chapters?.response?.map((chapter) => {
            return (
              <option
                className="default-select"
                key={chapter?.title}
                value={chapter?._id}
              >
                {chapter?.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
export default InputChapter;
