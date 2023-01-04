import comicActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { createNewComic } = comicActions

const initialState = {
    newComic: []
}

const comicReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(
                createNewComic.fulfilled,
                (state, action) => {
                    let newState = {
                        newComic: action.payload.response.comic,
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
    }

)

export default comicReducer