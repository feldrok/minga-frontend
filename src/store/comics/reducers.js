import comicActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const {
    createNewComic,
    getComic,
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
    get_comics_from_cia,
    get_comics_company,
    get_comics_from_author
} = comicActions

const initialState = {
    comic: [],
    comics: [],
    storedComics: "",
    message: "",
    limit: 10,
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
        .addCase(getComic.fulfilled, (state, action) => {
            let newState = {
                comics: state.comics,
                comic: action.payload.response.comic,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComics.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                comic: state.comic,
                storedComics: "allComics",
                limit: action.payload.limit,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComicsByTitle.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                comic: state.comic,
                search: action.payload.search,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComicsByCategory.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                comic: state.comic,
                search: action.payload.search,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getComicsByTitleAndCategory.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                comic: state.comic,
                search: action.payload.search,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(get_comics_from_cia.fulfilled, (state, action) => {
            let newState = {
                comic: state.comic,
                comics: action.payload.response.comics,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(get_comics_company.fulfilled, (state, action) => {
            let newState = {
                comic: state.comic,
                comics: action.payload.response.comics,
                storedComics: "companyComics",
                limit: action.payload.limit,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(get_comics_from_author.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                message: action.payload.message
            }
            return newState
        })
})

export default comicReducer
