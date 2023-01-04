/* import companyActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { addCompany } = companyActions;

const companyInitialState = { companies: [] };

const companyReducers = createReducer(companyInitialState, (builder) =>  {
    builder
    .addCase(addCompany.fulfilled, (state, action) => {
        let newState = {
            company: action.payload.response.companies.data.response
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

export default companyReducers */