import { createReducer } from "@reduxjs/toolkit";
import donateAction from "./actions";

const {donation} = donateAction

const initialState = {
    order : [],
    message: ""
}

const donationReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(donation.fulfilled, (state, action) => {
        let newState = {
            mercadopago: action.payload.response,
            message: action.payload.message,
        }
        return newState
    })})  

export default donationReducer 