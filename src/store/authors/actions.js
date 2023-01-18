import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addAuthor = createAsyncThunk("addAuthor", async (author) => {
  try {
    const response = await axios.post("http://localhost:8000/api/authors", author);
    return {
      response: { author: response.data },
      message: "Author successfully created",
    };
  } catch (error) {
    return {
      response: { author: error.response.data },
      message: "Failed to create new author.",
    };
  }
});

const get_author = createAsyncThunk(
  "get_author", async (_id) => {
    try{
      const response = await axios.get(`http://localhost:8000/api/authors/${_id}`)
      return{
        response: {author: response.data },
        message: "Author found"
      }
      
    }catch (error) {
      return {
        response: { author: error.response.data },
        message: "Author not found",
      }
  }
}
)

const authorActions = {addAuthor, get_author};

export default authorActions