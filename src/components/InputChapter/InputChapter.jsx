import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import React from "react";
import chapterActions from "../../store/chapters/actions";
import getIdActions from "../../store/getId/getIdAction";
import styles from "./InputChapter.module.css"

const { getChapters } = chapterActions;
const { getIdChapter } = getIdActions

const InputChapter = () => {
  const idComicStore = useSelector((state) => state?.id?.idComic?.payload); 
  console.log(idComicStore) 

  const chaptersStore = useSelector((state) => state?.chapters);
  console.log(chaptersStore) 

  const [idChapter, setIdChapter] = useState(null)
  console.log(idChapter) 

  const dispatch = useDispatch();

  // funcion obtener el valor del input del chapter
  const getValueChapter = (e) => {
    setIdChapter(e.target.value);
    dispatch(getIdChapter(idChapter)); 
  }; 

  useEffect(() => {
    if (idComicStore) {
      dispatch(getChapters({ id: idComicStore }));
    }
  }, [idComicStore]); 
  
  useEffect(() => {
    dispatch(getIdChapter(idChapter));  
  }, [idChapter]); 

  
  return (
    <>
      <div className="">
        <select name="categories" onChange={getValueChapter} className= {styles.inpFormSelect}> 
          { <option>Select chapter</option> }
          {  chaptersStore?.chapters?.response?.map((chapter) => {
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
