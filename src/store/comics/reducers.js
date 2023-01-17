import comicActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { createNewComic, getComic } = comicActions

const initialState = {
    comic: [],
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
            .addCase(getComic.fulfilled, 
                (state, action) => {
                    let newState= {
                        comics:state.comics,
                        comic: action.payload.response.comic,
                        message: action.payload.message 
                }
                return newState
            }) 
    } 
)
export default comicReducer  
