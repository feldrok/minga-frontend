import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit" // metodo para realizar acciones asincronas

const API_URL = process.env.REACT_APP_API_URL

const handleToken = () => {
  const BEARER_TOKEN = localStorage.getItem("token")

  let config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEARER_TOKEN}`,
      },
  }
  return config
}

const addComment = createAsyncThunk("comments/addComment", async (comment) => {
  try {
    const response = await axios.post(`${API_URL}/comments`, comment, handleToken())
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

const getComments = createAsyncThunk("getComments", async (chapter_id) => {
  try {
    const response = await axios.get(`${API_URL}/comments`, {
      params: {chapter_id}, 
      ...handleToken()
    })
    console.log("GET COMMENTS RESPONSE", response.data)
    return {
      response: {comments: response.data},
      message: "Loading comments...",
    }
  } catch (error) {
    console.log(" ERROR", error)
    return {
      response: {comments: error.response.data},
      message: "Failed to load comments!",
    }
  }
})


export {
  addComment,
  getComments,
}
