import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const { signIn } = userActions

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
})

export default userReducer