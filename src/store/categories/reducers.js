import categoryActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { get_categories } = categoryActions;

const initialState = { categories: [], message: "" };

const categoryReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(get_categories.fulfilled, (state, action) => {
        let newState = {
            categories: action.payload.response.category,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(get_categories.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
})

export default categoryReducer