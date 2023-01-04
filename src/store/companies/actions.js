import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCompanies = createAsyncThunk(
    "getCompany",
    async() => {
        try {
            let companies = await axios.get("http://localhost:8000/api/companies")
            return {
                success: true,
                message: "Company successfully created"
            }
        } catch(error) {
            return {
                success: false,
                message: "Failed to create new company."
            }
        }
    }
)

const companyActions = {
    getCompanies,
}

export default companyActions