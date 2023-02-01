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
        console.log("getChapters response:", response)
        return {
            response: { chapters: response.data },
            limit: limit,
            message: "Chapters obtained",
        }
    } catch (error) {
        console.log(error)
        return {
            response: { chapters: error.response.data },
            message: "Error obtained chapters",
        }
    }
})




const getChapterDetails = createAsyncThunk("getChapterDetails", async (_id) => {
    try {
        const response = await axios.get(`${API_URL}/chapters/${_id}`, handleToken())
        return {
            response: { chapter: response.data },
          /*   message: "Chapter successfully obtained!", */
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error: Chapter cannot be obtained.",
        }
    }
}) 

const editChapter = createAsyncThunk("editChapters", async (chapter) => {
    console.log(chapter)
    try {
        const body = {
            [chapter.category] : chapter.data  ////propiedad computada.. primero resuelve lo que esta dentro del array.. 
        } 
        const response = await axios.put(
            `${API_URL}/chapters/${chapter.id}`,  body, //ruta , / segundo es el body lo que mando... 
            handleToken()
        )
        console.log(response) 
        return {
            response: { chapter: response.data },
            message: "Edited chapter",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error edited chapter you must be the author to edit",
        }
    }
})

const deleteChapter = createAsyncThunk("deleteChapters", async (chapter) => {
    console.log(chapter)
    try {
        const response = await axios.delete(
            `${API_URL}/chapters/${chapter.id}`, 
            handleToken()
        )
        console.log(response) 
        return {
            response: { chapter: response.data },
            message: "deleted chapter",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error deleted chapter, you must be the author to delete",
        }
    } 
})


const chapterActions = {
    newChapter,
    getChapterDetails,
    getChapters,
    editChapter,
    deleteChapter 
}

export default chapterActions
