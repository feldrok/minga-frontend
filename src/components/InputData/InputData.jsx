import React from "react";
import styles from "./InputData.module.css"

const InputData = () => {
  return (
    <>
      <div>
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
        <input type="text" placeholder="data to edit" className= {styles.inpFormSelect}></input>
      </div>
    </>
  );
};

export default InputData;
