import commentActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { addComment } = commentActions

const initialState = {
  comments: [],
  comment: [],
  message: "",
}

const commentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment.fulfilled, (state, action) => {
      let newState = {
        comment: action.payload.response.comment,
        comments: state.comments,
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