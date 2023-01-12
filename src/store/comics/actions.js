import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL

const createNewComic = createAsyncThunk("createNewComic", async (comic) => {
    try {
        let response = await axios.post(
            `${API_URL}/comics`,
            comic
        )
        console.log(response)
        return {
            response: { comic: response.data },
            message: "Comic created",
        }
    } catch (error) {
        console.log(error)
        return {
            response: { comic: error.response.data },
            message: "Error creating comic",
        }
    }
})

const getComics = createAsyncThunk("getComics", async (limit) => {
    if (limit === undefined) {
        limit = 10
    }
    try {
        let response = await axios.get(
            `${API_URL}/comics?limit=${limit}`
        )
        return {
            response: { comics: response.data },
            limit: limit,
            message: "Comics obtained",
        }
    } catch (error) {
        return {
            response: { comics: error.response.data },
            message: "Error obtaining comics",
        }
    }
})

const getComicsByTitle = createAsyncThunk("getComicsByTitle", async (title) => {
    try {
        let response = await axios.get(
            `${API_URL}/comics/?title=${title}`
        )
        return {
            response: { comics: response.data },
            search: title,
            message: "Comics obtained",
        }
    } catch (error) {
        return {
            response: { comics: error.response.data },
            message: "Error obtaining comics",
        }
    }
})

const getComicsByCategory = createAsyncThunk(
    "getComicsByCategory",
    async (category) => {
        try {
            let response = await axios.get(
                `${API_URL}/comics/?category_id=${category}`
            )
            return {
                response: { comics: response.data },
                search: category,
                message: "Comics obtained",
            }
        } catch (error) {
            return {
                response: { comics: error.response.data },
                message: "Error obtaining comics",
            }
        }
    }
)

const getComicsByTitleAndCategory = createAsyncThunk(
    "getComicsByTitleAndCategory",
    async (object) => {
        try {
            let response = await axios.get(
                `${API_URL}/comics/?title=${object.title}&category_id=${object.category_id}`
            )
            return {
                response: { comics: response.data },
                message: "Comics obtained",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comics: error.response.data },
                message: "Error obtaining comics",
            }
        }
    }
)

const comicActions = {
    createNewComic,
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
}
export default comicActions
