import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const { signIn, signInToken } = userActions

const initialState = {
    user: [],
    accessToken: "",
    message: ""
}

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signIn.fulfilled, (state, action) => {
            let newState = {
                user: action.payload.response.user,
                accessToken: action.payload.response.user.response.token,
                message: action.payload.message
            }
            return newState
        })
        .addCase(signIn.rejected, (state, action) => {
            let newState = {
                message: "error"
            }
            return newState
        })
        .addCase(signInToken.fulfilled, (state, action) => {
            let newState = {
                user: action.payload.response.user,
                accessToken: localStorage.getItem("token"),
                message: action.payload.message
            }
            return newState
        })
        .addCase(signInToken.rejected, (state, action) => {
            let newState = {
                message: "error"
            }
            return newState
        })
})

export default userReducer