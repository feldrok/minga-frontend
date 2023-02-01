import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL

const handleToken = () => {
    const BEARER_TOKEN = localStorage.getItem("token")

    let config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    }
    return config
}

const addCompany = createAsyncThunk("addCompany", async (company) => {
    try {
        const response = await axios.post(`${API_URL}/company`, company, handleToken())
        return {
            response: { company: response.data },
            message: "Company successfully created",
        }
    } catch (error) {
        return {
            response: { company: error.response.data },
            message: "Failed to create new company.",
        }
    }
})

const get_company = createAsyncThunk("get_company", async (id) => {
    try {
        const response = await axios.get(`${API_URL}/company/${id}`, handleToken())
        return {
            response: { companies: response.data },
            message: "Company found",
        }
    } catch (error) {
        return {
            response: { company: error.response.data },
            message: "Company not found",
        }
    }
})
const get_company_from_user = createAsyncThunk("get_company_from_user", async (id) => {
    try {
        const response = await axios.get(`${API_URL}/company/${id}`, handleToken())
        return {
            response: { companies: response.data },
            message: "Company found",
        }
    } catch (error) {
        return {
            response: { company: error.response.data },
            message: "Company not found",
        }
    }
})

const companyActions = {
    addCompany,
    get_company,
    get_company_from_user
}

export default companyActions
