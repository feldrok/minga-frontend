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

const signIn = createAsyncThunk("signIn", async (user) => {
    try {
        let response = await axios.post(`${API_URL}/auth/signin`, user, handleToken())
        return {
            response: { user: response.data },
            message: "User authenticated",
        }
    } catch (error) {
        console.log(error)
        return {
            response: { user: error.response.data },
            message: "Error authenticating user",
        }
    }
})

const userActions = {
    signIn
}

export default userActions