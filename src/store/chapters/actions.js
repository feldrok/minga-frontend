import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/chapters",
            chapter
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
            `http://localhost:8000/api/chapters?comic_id=${id}&limit=${limit}`
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
        const response = await axios.get(
            `http://localhost:8000/api/chapters/${_id}`
        )
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

const chapterActions = {
    newChapter,
    getChapterDetails,
    getChapters,
}

export default chapterActions
