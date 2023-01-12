import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Chapters from "../../components/Chapters/Chapters";
import Nav from "../../layouts/Nav/Nav";
import React from "react";
import comicActions from "../../store/comics/actions";
import styles from "./Comic.module.css";
import { useParams } from "react-router-dom";

const { getComic } = comicActions;

export default function Comic() {
  const comicStore = useSelector(store => store.comics) 
  const dispatch= useDispatch()

const { id } = useParams() 

  useEffect(()  => {
    dispatch(getComic(id))
  }, [])

  const [chapter, setChapter] = useState(false) 
  const handleClick = () => {
    setChapter(!chapter) 
  }


  return (
    <div> 
      <Nav />
      <img src={comicStore.comics.response?.photo}  alt={comicStore.comics.response?.photo} /> 
      <p className={styles.description}>{comicStore.comics.response?.description}</p>
      <button onClick={handleClick}> Chapter </button> { chapter ? (<Chapters />) : null } 
    </div>
  );
} 



/* 

    const url= window.location.href.split("/")
    console.log(url[url.length-1]) 
    dispatch(getComic(url[url.length-1]))
    dispatch(getChapter(url[url.length-1])) 

*/

/* 
const response = await axios.get(
        "http://localhost:8000/api/comics/63bcc0093f33b0f658f28cdc"
      );
      let datos = response.data.response;
      setComics(datos);
    } catch (err) {
      console.log(err);
    } 
  };
  useEffect(() => {
    obtenerComic();
  }, []);
*/
