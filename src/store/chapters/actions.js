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
            message: " ✓ CHAPTER SUCCESSFULLY CREATED",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: " ✘ ERROR: FAILED TO CREATE NEW CHAPTER",
        }
    }
});

const chapterActions = {
    newChapter,
}

export default chapterActions