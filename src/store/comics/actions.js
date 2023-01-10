import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const createNewComic = createAsyncThunk("createNewComic", async (comic) => {
    try {
        let response = await axios.post(
            "http://localhost:8000/api/comics",
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

const getComics = createAsyncThunk("getComics", async () => {
    try {
        let response = await axios.get("http://localhost:8000/api/comics")
        return {
            response: { comics: response.data },
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
        let response = await axios.get(`http://localhost:8000/api/comics/?title=${title}`)
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

const getComicsByCategory = createAsyncThunk("getComicsByCategory", async (category) => {
    try {
        let response = await axios.get(`http://localhost:8000/api/comics/?category=${category}`)
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
})

const getComicsByTitleAndCategory = createAsyncThunk("getComicsByTitleAndCategory", async (title, category) => {
    try {
        let response = await axios.get(`http://localhost:8000/api/comics/?title=${title}&category=${category}`)
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


const comicActions = {
    createNewComic,
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
}
export default comicActions
