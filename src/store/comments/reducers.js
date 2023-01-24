import {addComment, getComments} from "./actions"

import { createReducer } from "@reduxjs/toolkit"

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
    .addCase(getComments.fulfilled, (state, action) => {
      let newState = {
        comments: action.payload.response.comments,
        comment: state.comment,
        message: action.payload.message,
      }
      return newState
    })
    .addCase(getComments.rejected, (state, action) => {
      let newState = {
        message: "Error"
      }
      return newState
    })
})

export default commentReducer