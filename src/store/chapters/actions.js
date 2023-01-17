import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
    try {
        const response = await axios?.post(
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

const getChapters = createAsyncThunk( 
    "getChapter",
    async ({id, pages}) => {
        try {
            const response= await axios.get(`http://localhost:8000/api/chapters?comic_id=${id}&page=${pages}`)
        return {
            response: {chapter: response.data},
            message: "Chapter obtained"
        }
        } catch (error) {
            return {
                response: {chapter: error.response.data},
                message: "Error obtained chapter"
            }
        }
    }
)

const chapterActions = {
    newChapter, getChapters
} 
export default chapterActions
