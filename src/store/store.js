import authorReducer from "./authors/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    author: authorReducer
  }
})

export default store