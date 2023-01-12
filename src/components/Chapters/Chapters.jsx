import { useDispatch, useSelector } from "react-redux";

import React from "react";
import chapterActions from "../../store/chapters/actions";
import { useEffect } from "react";
import { useParams } from "react-router";

const { getChapter } = chapterActions

export default function Chapters() {
  const chapterStore= useSelector(store => store.chapters) 
  const dispatch= useDispatch() 
  const { id } = useParams() 

useEffect(() => {
  dispatch(getChapter(id))
}, [])

  return (
    <div>
    {chapterStore.chapters.response?.map(chapter => chapter.title)}  
    </div>
  );
}






{/*  <p>{chapters.map((chapter) => chapter.title)}</p> */}



/* 


  const [chapters, setChapters] = useState([]);

  const obtenerChapters = async () => {
    try {
      let response = await axios.get(
        "http://localhost:8000/api/chapters?comic_id=63bcc04fc1100e248b3ba58e"
      );
      let datos = response.data.response;
      setChapters(datos);
      console.log(datos);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    obtenerChapters();
  }, []);

*/