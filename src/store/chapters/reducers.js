import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { newChapter, getChapterDetails, getChapters, editChapter, deleteChapter } = chapterActions;

const initialState = {
    chapters: [],
    chapter: [],
    updateChapter: [],
    deleteChapter: [],
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
            ...state, // se actualiza, pero el resto queda como esta... 
            chapters: state.chapters,
            chapter: action.payload.response.chapter,
           /*  message: action.payload.message */
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
                chapters: action.payload.response.chapters,
                chapter: state.chapter,
                limit: action.payload.limit,
             /*    message: action.payload.message  */
            }
            return newState
        })
    .addCase(editChapter.fulfilled, 
        (state, action) => {
            let newState = {
                updateChapter: action.payload.response.chapter,
                chapter: state.chapter, 
                message: action.payload.message
            }
            return newState
        }) 
    .addCase(deleteChapter.fulfilled, 
        (state, action) => {
            console.log(action.payload)
            let newState = {

                deleteChapter: action.payload.response.chapter,
                chapter: state.chapter, 
                message: action.payload.message
            }
            return newState
        })
}) 
export default chapterReducer
