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

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
    try {
        const response = await axios.post(
            `${API_URL}/chapters`,
            chapter,
            handleToken()
        )
        return {
            response: { chapter: response.data },
            message: "Chapter created successfully",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error creating chapter",
        }
    }
})

const getChapters = createAsyncThunk("getChapters", async ({ id, limit }) => {
    if (limit === undefined) {
        limit = 5
    }
    try {
        const response = await axios.get(
            `${API_URL}/chapters?comic_id=${id}&limit=${limit}`,
            handleToken()
        )
        return {
            response: { chapter: response.data },
            limit: limit,
            message: "Chapter obtained",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error obtained chapter",
        }
    }
})




const getChapterDetails = createAsyncThunk("getChapterDetails", async (_id) => {
    try {
        const response = await axios.get(`${API_URL}/chapters/${_id}`, handleToken())
        return {
            response: { chapter: response.data },
            message: "Chapter successfully obtained!",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error: Chapter cannot be obtained.",
        }
    }
})

//action para actualizar datos de un chapter

/* 
const editChapter = createAsyncThunk("getChapters", async ({ id }) => {
    try {
        const response = await axios.put(
            `${API_URL}/chapters?${id}`, 
            handleToken()
        )
        return {
            response: { chapter: response.data },
            message: "Chapter editado",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error edit chapter",
        }
    }
}) 
 */

const chapterActions = {
    newChapter,
    getChapterDetails,
    getChapters,
}

export default chapterActions
