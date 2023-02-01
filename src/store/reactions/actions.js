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

const addReaction = createAsyncThunk("addReaction", async (reaction) => {
    try {
        const response = await axios.post(
            `${API_URL}/reactions`,
            reaction,
            handleToken()
        )
        return {
            response: { reaction: response.data },
            message: "Reaction added",
        }
    } catch (error) {
        return {
            response: { reaction: error.response.data },
            message: "Error creating comic",
        }
    }
})

const getReactions = createAsyncThunk("getReactions", async ({ comic_id, user_id, limit}) => {
    try {
        const response = await axios.get(
            `${API_URL}/reactions/?comic_id=${comic_id}&user_id=${user_id}&limit=${limit}`,
            handleToken()
        )
        return {
            response: { reactions: response.data },
            message: "Reactions obtained",
        }
    } catch (error) {
        return {
            response: { reactions: error.response.data },
            message: "Error obtaining reactions",
        }
    }
})

const reactionActions = {
    addReaction,
    getReactions,
}

export default reactionActions