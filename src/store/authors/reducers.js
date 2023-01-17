import { createReducer } from "@reduxjs/toolkit";
import authorActions from "./actions";

const { addAuthor, get_author } = authorActions;

const initialState = { 
    authors: [], 
    message: "" 
};

const authorReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(addAuthor.fulfilled, (state, action) => {
        let newState = {
            author: action.payload.response.author,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(addAuthor.rejected, (state, action) => {
        let newState =  {
            message: "error"
        }
        return newState
    })
    .addCase(get_author.fulfilled, (state, action) => {
        let newState = {
            authors: action.payload.response.author.response,
            message: action.payload.message
        }
        return newState
    })
})

export default authorReducer