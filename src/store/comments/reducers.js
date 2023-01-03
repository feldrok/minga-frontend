import commentActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { addComment } = commentActions

const initialState = {
  comments: [],
  message: "",
}

const commentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment.fulfilled, (state, action) => {
      let newState = {
        comments: action.payload.response.comment,
        message: action.payload.message
      }
      return newState
    })
    .addCase(addComment.rejected, (state, action) => {
      let newState = {
        message: "error"
      }
      return newState
    })
})

export default commentReducer