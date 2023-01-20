import InputComic from "../InputComic/InputComic";
import React from "react";

const EditChapterForm = () => {

  return (
    <div className="divContainerForm">
      <p>New Comic</p>
      <form action="" className="formNewComic" /* onSubmit={createComic} */>
        <InputComic />
        <select name="categories" id="categories">
          <option className="default-select" value="">
            Select chapter
          </option>
          <option value="Shonen">Comic Shonen</option>
        </select>
        <select name="categories" id="categories">
          <option className="default-select" value="">
            Select data
          </option>
          <option value="Shonen">Comic Shonen</option>
        </select>
        <input type="text" placeholder="data to edit" className="inpForm" />
        <input type="submit" value="Edit" className="button_create" />
        <input type="submit" value="Delete" className="button_create" />
      </form>
    </div>
  );
};

export default EditChapterForm;
