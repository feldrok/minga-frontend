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

const createLastRead = createAsyncThunk("createLastRead", async (lastRead) => {
    try {
        let response = await axios.post(
            `${API_URL}/lastreads`,
            lastRead,
            handleToken()
        )
        return {
            response: { lastRead: response.data },
            message: "Last read created",
        }
    } catch (error) {
        return {
            response: { lastRead: error.response.data },
            message: "Error creating last read",
        }
    }
})

const getLastRead = createAsyncThunk("getLastRead", async (chapter_id) => {
    try {
        let response = await axios.get(
            `${API_URL}/lastreads/${chapter_id}`,
            handleToken()
        )
        return {
            response: { lastRead: response.data },
            message: "last read obtained",
        }
    } catch (error) {
        return {
            response: { lastRead: error.response.data },
            message: "error obtaining last read",
        }
    }
})

const getLastReads = createAsyncThunk("getLastReads", async () => {
    try {
        let response = await axios.get(`${API_URL}/lastreads`, handleToken())
        return {
            response: { lastReads: response.data },
            message: "last reads obtained",
        }
    } catch (error) {
        return {
            response: { lastReads: error.response.data },
            message: "error obtaining last reads",
        }
    }
})

const updateLastRead = createAsyncThunk("updateLastRead", async (lastReads) => {
    try {
        let response = await axios.put(
            `${API_URL}/lastreads/${lastReads.chapter_id}`,
            lastReads,
            handleToken()
        )
        return {
            response: { lastRead: response.data },
            message: "last read updated",
        }
    } catch (error) {
        return {
            response: { lastRead: error.response.data },
            message: "error updating last read",
        }
    }
})

const lastReadActions = {
    createLastRead,
    getLastRead,
    getLastReads,
    updateLastRead,
}

export default lastReadActions
