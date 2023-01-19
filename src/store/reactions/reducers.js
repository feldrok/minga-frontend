import { createReducer } from "@reduxjs/toolkit"
import reactionActions from "./actions"

const { addReaction, getReactions } = reactionActions

const initialState = {
    reactions: [],
    message: "",
}

const reactionReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addReaction.fulfilled, (state, action) => {
            let newState = {
                reactions: action.payload.response.reaction,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(addReaction.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
        .addCase(getReactions.fulfilled, (state, action) => {
            let newState = {
                reactions: action.payload.response.reactions,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getReactions.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
})

export default reactionReducer