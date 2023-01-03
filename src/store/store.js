import alertReducer from "./alerts/reducers"
import categoryReducer from "./comments/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    comments: categoryReducer,
    alerts: alertReducer,
  }
})

export default store