import commentActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { addComment } = commentActions

const initialState = {
  comments: [],
  loading: false,
  error: null
}

const commentReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(addComment.pending, (state) => {
    state.loading = true
  })
  .addCase(addComment.fulfilled, (state, action) => {
    state.loading = false
    state.comments = action.payload.response.comment
  })
  .addCase(addComment.rejected, (state, action) => {
    state.loading = false
    state.error = action.payload
  })
})

export default commentReducer