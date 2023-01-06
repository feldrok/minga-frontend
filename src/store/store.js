import commentReducer from "./comments/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    comments: commentReducer,
  }
})

export default store