import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { newChapter, getChapter } = chapterActions;

const initialState = { chapters: [], message: "" };

const chapterReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(newChapter.fulfilled, (state, action) => {
        let newState = {
            chapters: action.payload.response.chapter,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(newChapter.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
    .addCase(getChapter.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapter,
                message: action.payload.message
            }
            return newState
        }
        )
})

export default chapterReducer