import commentReducer from "./comments/reducers"
import { configureStore } from "@reduxjs/toolkit"
import chapterReducer from "./chapters/reducers"

const store = configureStore({
  reducer: {
    comments: commentReducer,
    chapters: chapterReducer,
  }
})

export default store