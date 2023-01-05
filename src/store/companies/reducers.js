import companyActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { addCompany } = companyActions;

const initialState = { companies: [], message: "" };

const companyReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(addCompany.fulfilled, (state, action) => {
        let newState = {
            company: action.payload.response.company,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(addCompany.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
})

export default companyReducer