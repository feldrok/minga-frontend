import categoryReducer from "./comments/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    comments: categoryReducer,
  }
})

export default store