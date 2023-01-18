import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { newChapter, getChapterDetails, getChapters } = chapterActions;

const initialState = {
    chapters: [],
    chapter: [],
    limit: 5,
    message: ""
};

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
    .addCase(getChapterDetails.fulfilled, (state, action) => {
        let newState = {
            chapters: state.chapters,
            chapter: action.payload.response.chapter,
            message: action.payload.message
        }
        return newState
    })
    .addCase(getChapterDetails.rejected, (state, action) => {
        let newState = {
            message: "Error Loading Chapter"
        }
        return newState
    })
    .addCase(getChapters.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapter,
                chapter: state.chapter,
                limit: action.payload.limit,
                message: action.payload.message
            }
            return newState
        }
        )
})

export default chapterReducer