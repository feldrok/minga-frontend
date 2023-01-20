import lastReadActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const {
    createLastRead,
    getLastRead,
    getLastReads,
    updateLastRead,
} = lastReadActions

const initialState = {
    lastRead: [],
    lastReads: [],
    message: "",
}

const lastReadReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createLastRead.fulfilled, (state, action) => {
            let newState = {
                lastRead: action.payload.response.lastRead,
                lastReads: state.lastReads,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(createLastRead.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
        .addCase(getLastRead.fulfilled, (state, action) => {
            let newState = {
                lastRead: action.payload.response.lastRead.response[0],
                lastReads: state.lastReads,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getLastRead.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
        .addCase(getLastReads.fulfilled, (state, action) => {
            let newState = {
                lastReads: action.payload.response.lastReads,
                lastRead: state.lastRead,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(getLastReads.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
        .addCase(updateLastRead.fulfilled, (state, action) => {
            let newState = {
                lastRead: action.payload.response.lastRead,
                lastReads: state.lastReads,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(updateLastRead.rejected, (state, action) => {
            let newState = {
                message: "error",
            }
            return newState
        })
})

export default lastReadReducer