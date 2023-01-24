import companyActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { addCompany, get_company, get_company_from_user } = companyActions;

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
    .addCase(get_company.fulfilled, (state, action) => {
        let newState = {
            companies: action.payload.response.companies.response,
            message: action.payload.message
        }
        return newState
    })
    .addCase(get_company_from_user.fulfilled, (state, action) => {
        let newState = {
            companies: action.payload.response.companies.response,
            message: action.payload.message
        }
        return newState
    })
})

export default companyReducer