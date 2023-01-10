import categoryActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { getCategories } = categoryActions

const initialState = {
    categories: [],
    message: "",
}

const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.fulfilled, (state, action) => {
            let newState = {
                categories: action.payload.response.categories,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getCategories.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
})

export default categoryReducer