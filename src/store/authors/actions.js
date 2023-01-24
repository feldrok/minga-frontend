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

const addAuthor = createAsyncThunk("addAuthor", async (author) => {
    try {
        const response = await axios.post(`${API_URL}/authors`, author, handleToken())
        return {
            response: { author: response.data },
            message: "Author successfully created",
        }
    } catch (error) {
        return {
            response: { author: error.response.data },
            message: "Failed to create new author.",
        }
    }
})

const get_author = createAsyncThunk("get_author", async (_id) => {
    try {
        const response = await axios.get(`${API_URL}/authors/${_id}`, handleToken())
        return {
            response: { author: response.data },
            message: "Author found",
        }
    } catch (error) {
        return {
            response: { author: error.response.data },
            message: "Author not found",
        }
    }
})
const get_author_from_user = createAsyncThunk("get_author_from_user", async (id) => {
    try {
        const response = await axios.get(`${API_URL}/authors/${id}`, handleToken())
        return {
            response: { author: response.data },
            message: "Author found",
        }
    } catch (error) {
        return {
            response: { author: error.response.data },
            message: "Author not found",
        }
    }
})

const authorActions = { addAuthor, get_author, get_author_from_user}

export default authorActions
