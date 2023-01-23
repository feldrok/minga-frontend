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

const createNewComic = createAsyncThunk("createNewComic", async (comic) => {
    try {
        let response = await axios.post(`${API_URL}/comics`, comic, handleToken())
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

const getComic = createAsyncThunk("getComic", async (comic) => {
    try {
        let response = await axios.get(`${API_URL}/comics/${comic}`, handleToken())
        return {
            response: { comic: response.data },
            message: "comic obtained",
        }
    } catch (error) {
        return {
            response: { comic: error.response.data },
            message: "error obtained comic",
        }
    }
})

const getComics = createAsyncThunk("getComics", async ({ limit, title, category_id}) => {
    if (limit === undefined) {
        limit = 10
    }
    if (title === undefined) {
        title = ""
    }
    if (category_id === undefined) {
        category_id = ""
    }
    try {
        let response = await axios.get(
            `${API_URL}/comics?title=${title}&category_id=${category_id}&limit=${limit}`,
            handleToken()
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

const get_comics_company = createAsyncThunk(
    "get_comics_company",
    async ({ company_id, limit }) => {
        if (limit === undefined) {
            limit = 5
        }
        try {
            let response = await axios.get(
                `${API_URL}/comics/profile/company?company_id=${company_id}&limit=${limit}`,
                handleToken()
            )
            return {
                response: { comics: response.data },
                limit: limit,
                message: "Comic/s Found",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comics: error.response.data },
                message: "Comic not found",
            }
        }
    }
)

const get_comics_from_cia = createAsyncThunk(
    "get_comics_from_cia",
    async ({ company_id, limit, category_id }) => {
        if (limit === undefined) {
            limit = 5
        }
        try {
            let response = await axios.get(
                `${API_URL}/comics/profile/company?company_id=${company_id}&limit=${limit}&category_id=${category_id}`,
                handleToken()
            )
            return {
                response: { comics: response.data },
                limit: limit,
                message: "Comic/s Found",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comics: error.response.data },
                limit: limit,
                message: "Comic not found",
            }
        }
    }
)

const get_comics_from_author = createAsyncThunk(
    "get_comics_from_author",
    async ({ author_id }) => {
        try {
            let response = await axios.get(
                `${API_URL}/comics/profile/author?author_id${author_id}`,
                handleToken()
            )
            return {
                response: { comics: response.data.response },
                message: "Comic/s Found",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comics: error.response.data },
                message: "Comic not found",
            }
        }
    }
)

const comicActions = {
    createNewComic,
    getComic,
    getComics,
    get_comics_company,
    get_comics_from_cia,
    get_comics_from_author,
}

export default comicActions
