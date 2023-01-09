import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import comicReducer from "./comics/reducers"
import { configureStore } from "@reduxjs/toolkit"
import chapterReducer from "./chapters/reducers"

const store = configureStore({
  reducer: {
    comments: commentReducer,
    company: companyReducer,
    comics: comicReducer
  }
  
})

export default store
