import commentReducer from "./comments/reducers"
import companyReducers from "./companies/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    comments: commentReducer,
    company: companyReducers
  }
})

export default store