import comicActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { createNewComic, getComics, getComicsByTitle, getComicsByCategory, getComicsByTitleAndCategory } = comicActions

const initialState = {
    comics: [],
    message: "",
    search: "",
}

const comicReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createNewComic.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comic,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(createNewComic.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
        .addCase(getComics.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComicsByTitle.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                search: action.payload.search,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComicsByCategory.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                search: action.payload.search,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComicsByTitleAndCategory.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                search: action.payload.search,
                message: action.payload.message,
            }
            return newState
        })
})

export default comicReducer
