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

const donation = createAsyncThunk("donation", async ({data}) => {
    try {
        const response = await axios.post(`${API_URL}/donations/crear-orden`, data , handleToken())
        console.log(response)
        return {
            success: true,
            response: { ticket : response.data },
            message: "Ticket successfully created",
        }
    } catch (error) {
        return {
            response: { ticket: error.response.data },
            message: "Failed to create ticket",
        }
    }
})

const donateAction = {donation}
export default donateAction


