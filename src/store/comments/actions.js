import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit" // metodo para realizar acciones asincronas

const addComment = createAsyncThunk("comments/addComment", async (comment) => {
  try {
    const response = await axios.post("http://localhost:8000/api/comments", comment)
    return {
      response: { comment: response.data },
      message: "Comentario agregado",
    
    }
  } catch (error) {
    return {
      response: { comment: error.response.data },
      message: "Error agregando el comentario"
    }
  }
  
})

const commentActions = {
  addComment,
}

export default commentActions