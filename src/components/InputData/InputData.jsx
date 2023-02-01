import React from "react";
import styles from "./InputData.module.css"
import { useDispatch } from "react-redux";
import { useRef } from "react";

const InputData = () => {

  //obtengo  la referencia
  const inputData= useRef("")
  console.log(inputData) 

  const dispatch= useDispatch()

  const chapter= {
    data: inputData.current.value,
  }
  /* dispatch(editChapter(chapter)) */

  return (
    <>
{/*       <div>
        <select name="categories" className= {styles.inpFormSelect}>
          <option className="default-select" value="">
            Selec data
          </option>
          <option value="title">Title</option>
          <option value="pages">Pages</option>
          <option value="order">Order</option>
        </select>
      </div>
      <div>
        <input type="text" 
        placeholder="data to edit" 
        className= {styles.inpFormSelect}
        ref= {inputData} 
        >
        </input>
      </div> */}
    </>
  );
};

export default InputData;
