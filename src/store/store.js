import authorReducer from "./authors/reducers"
import chapterReducer from "./chapters/reducers"
import comicReducer from "./comics/reducers"
import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    author: authorReducer,
    comments: commentReducer,
    company: companyReducer,
    comics: comicReducer,
    chapters: chapterReducer
  }
  
})

export default store
