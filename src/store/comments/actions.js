import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit" // metodo para realizar acciones asincronas

const API_URL = process.env.REACT_APP_API_URL
const BEARER_TOKEN = localStorage.getItem('token')

let config = {
  headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
  },
}

const addComment = createAsyncThunk("comments/addComment", async (comment) => {
  try {
    const response = await axios.post(`${API_URL}/comments`, comment, config)
    return {
      response: { comment: response.data },
      message: "Comment added successfully",
    
    }
  } catch (error) {
    return {
      response: { comment: error.response.data },
      message: "Error adding comment"
    }
  }
  
})

const commentActions = {
  addComment,
}

export default commentActions
