import categoryReducer from "./comments/reducers"
import comicReducer from "./comics/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    comments: categoryReducer,
    comics: comicReducer
  }
  
})

export default store
