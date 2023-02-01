import { createReducer } from "@reduxjs/toolkit"
import { getUsers } from "./actions"

const initialState = {
  users: [],
  message: "",
}

const commentReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        let newState = {
          users: action.payload.response.users,
          message: action.payload.message,
        }
        return newState
      })
      .addCase(getUsers.rejected, (state, action) => {
        let newState = {
          message: "Error"
        }
        return newState
      })
  })
  
  export default commentReducer