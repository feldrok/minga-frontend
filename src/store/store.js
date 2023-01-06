import { configureStore } from "@reduxjs/toolkit"
import chapterReducer from "./chapters/reducers"

const store = configureStore({
  reducer: {
    chapters: chapterReducer,
  }
})

export default store