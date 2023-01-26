import { createReducer, current } from "@reduxjs/toolkit"

import commentActions from "./actions"

const { getComments, addComment, editComment, deleteComment } = commentActions

const initialState = {
  comments: [],
  comment: [],
  message: "",
}

const commentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addComment.fulfilled, (state, action) => {
      let newState = {
        ...state,
        comment: action.payload.response.comment,
        message: action.payload.message
      }
      return newState
    })
    .addCase(addComment.rejected, (state, action) => {
      let newState = {
        ...state,
        message: "error"
      }
      return newState
    })
    .addCase(getComments.fulfilled, (state, action) => {
      let newState = {
        ...state,
        comments: action.payload.response.comments.response,
        comment: state.comment,
        message: action.payload.message,
      }
      return newState
    })
    .addCase(getComments.rejected, (state, action) => {
      let newState = {
        ...state,
        message: "Error"
      }
      return newState
    })
    .addCase(editComment.fulfilled, (state, action) => {
      let currentComments = [...state.comments]
      let newComment = action.payload.response.comment.response
      console.log(newComment)
      let findNewComment = currentComments.findIndex((c) => c._id === newComment._id)
      currentComments.splice(findNewComment, 1, newComment)
      let newState = {
        ...state,
        comments: currentComments,
        message: action.payload.message,
      }
      return newState
    })
    .addCase(editComment.rejected, (state, action) => {
      let newState = {
        ...state,
        message: "Error"
      }
      return newState
    })
    .addCase(deleteComment.fulfilled, (state, action) => {
      let comment_id = action.payload.response.data
      let currentComments = [...state.comments]
      let findNewComment = currentComments.findIndex((c) => c._id === comment_id)
      currentComments.splice(findNewComment, 1)
      let newState = {
        ...state,
        comment: currentComments,
        message: action.payload.message,
      }
      return newState
    })
    .addCase(deleteComment.rejected, (state, action) => {
      let newState = {
        message: "Error"
      }
      return newState
    })
  })
  
//...state clona el estado anterior al newState, para no perder los datos de los state viejos, y agrega todo lo nuevo que viene después.

export default commentReducer