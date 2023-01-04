import "./FormComics.css";

import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import React from "react";
import comicActions from "../../store/comics/actions";

const {createNewComic} = comicActions

function FormComics() {
    const store = useSelector(store=> store.comics)
    const dispatch= useDispatch()

    //obtengo las referencias
    const inputAuthor_id= useRef("")
    const inputCompany_id= useRef("")
    const inputTitle= useRef("");
    const inputPhoto= useRef("");
    const inputDescription= useRef("");
    const inputCategory= useRef("");

    const [value, setValue] = useState("")
    console.log(value)

//function para guardar los comics creados
    const createComic= (e) => {
        e.preventDefault()

        const comic = {
            author_id: inputAuthor_id.current.value,
            company_id: inputCompany_id.current.value,
            title: inputTitle.current.value,
            photo: inputPhoto.current.value,
            description: inputDescription.current.value,
            category: inputCategory.current.value,

        }
        console.log(comic)

       dispatch(createNewComic(comic))
              console.log(store)
    }




    return (
        <>
        <form action="" 
            className="container_form">
            <input type="text"
            ref= {inputAuthor_id}
            placeholder="Ingresar autor"
            className="input"
            />
            <input type="text"
            ref= {inputCompany_id}
            placeholder="Ingresar compania"
            className="input"
            />
            <input type="text"
            ref= {inputTitle}
            placeholder="Ingresar titulo"
            className="input"
            />
            <input type="text"
            ref= {inputPhoto}
            placeholder="Ingresar foto"
            className="input"
            />
            <input type="text"
            ref= {inputDescription}
            placeholder="Ingresar descripción"
            className="input"
            />
            <select
            name="categories"
            className="input"
            id="categories"
            onChange={(e) =>setValue(e.target.value)}
            >
                <option  value="">Ingresar categoria</option>
                <option  value="elManga">El manga</option>
                <option  value="aventura">Comic de aventuras</option>
                <option  value="belico">Comic bélico</option>
                <option  value="humoristico">Comic humorístico</option>
                <option  value="costumbrista">Comic costumbrista</option>
                <option  value="deportivo">Comic deportivo</option>
                <option  value="fantastico">Comic fantástico</option>
                <option  value="historico">Comic histórico</option>
                <option  value="policiaco">Comic políciaco</option>
                
            </select>
        </form>
        <div>
            <button className="button_create" onClick={createComic} > Crear &#128522;</button> 
        </div>
        </>
    );
}

export default FormComics;
