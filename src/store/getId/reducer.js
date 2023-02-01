import { createReducer } from "@reduxjs/toolkit"
import getIdActions from "./actions"

const { getIdComic, getIdChapter } = getIdActions

const initialState = {
    idComic: [],
    idChapter: [],
    reloadChapter: []
}
const getIdReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getIdComic.fulfilled, (state, action) => {
            let newState = {
                idComic: action.payload,
            }
            console.log(newState)
            return newState
        })
        .addCase(getIdChapter.fulfilled, (state, action) => {
            let newState = {
                idChapter: action.payload,
            }
            console.log(newState)
            return newState
        })
})

export default getIdReducer 
