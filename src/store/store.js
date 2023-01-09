import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import comicReducer from "./comics/reducers"
import { configureStore } from "@reduxjs/toolkit"
import chapterReducer from "./chapters/reducers"
import authorReducer from "./authors/reducers"

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
