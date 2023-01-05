import commentReducer from "./comments/reducers"
import companyReducer from "./companies/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    comments: commentReducer,
    company: companyReducer
  }
})

export default store