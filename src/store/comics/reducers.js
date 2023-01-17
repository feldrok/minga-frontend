import comicActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { createNewComic, get_comics_from_cia, get_comics_company } = comicActions

const initialState = {
    comics: [],
    message: ""
} 

const comicReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(
                createNewComic.fulfilled,
                (state, action) => {
                    let newState = {
                        comics: action.payload.response.comic,
                        message: action.payload.message
                    }
                    return newState
                }
            )
            .addCase(createNewComic.rejected, (state, action) => {
                let newState = {
                    message: "error"
                }
                return newState
            })
            .addCase(get_comics_from_cia.fulfilled, (state, action) => {
                let newState = {
                    comics: action.payload.response.comic,
                    message: action.payload.message
                }
                return newState
            })
            .addCase(get_comics_company.fulfilled, (state, action) => {
                let newState = {
                    comics: action.payload.response.comic,
                    message: action.payload.message
                }
                return newState
            })
    }

)

export default comicReducer 