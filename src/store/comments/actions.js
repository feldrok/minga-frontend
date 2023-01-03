import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit" // metodo para realizar acciones asincronas

const addComment = createAsyncThunk("addComment", async (comment) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/comments",
      comment
    )
    return {
      success: true,
      response: { comment: response.data },
      message: "Comentario agregado correctamente",
    }
  } catch (error) {
    return {
      success: false,
      response: { error: error.message },
      message: "Error al agregar el comentario",
    }
  }
})

const commentActions = {
  addComment,
}

export default commentActions
