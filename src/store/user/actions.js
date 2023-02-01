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

const addUser = createAsyncThunk("addUser", async (user) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, user)
        return {
            response: { user: response.data },
            message: "User successfully created",
        }
    } catch (error) {
        return {
            response: { user: error.response.data },
            message: "Failed to create new user.",
        }
    }
})

const verifyUser = createAsyncThunk("verifyUser", async ({user_id, verify_code}) => {
    try {
        console.log(user_id, verify_code)
        const response = await axios.get(`${API_URL}/auth/verify_code`, {params: {user_id, verify_code}})
        return {
            response: {
                message: "User Verified!"
            }
        }
    } catch (error) {
        return {
        message: "Failed to verify user!"
    }
    }
})

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

const signInToken = createAsyncThunk("signInToken", async (user) => {
    try {
        let response = await axios.post(`${API_URL}/auth/token`, user, handleToken())
        return {
            response: { user: response.data },
            message: "User is authenticated",
        }
    } catch (error) {
        console.log(error)
        return {
            response: { user: error.response.data },
            message: "User is not authenticated",
        }
    }
})

const userActions = {
    addUser,
    signIn,
    signInToken,
    verifyUser
}

export default userActions