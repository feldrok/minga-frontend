import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN

let config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
    },
}

const createNewComic = createAsyncThunk("createNewComic", async (comic) => {
    try {
        let response = await axios.post(`${API_URL}/comics`, comic)
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
        let response = await axios.get(`${API_URL}/comics/${comic}`)
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

const getComics = createAsyncThunk("getComics", async (limit) => {
    if (limit === undefined) {
        limit = 10
    }

    try {
        let response = await axios.get(
            `${API_URL}/comics?limit=${limit}`,
            config
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
            `${API_URL}/comics/?title=${title}`,
            config
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
                `${API_URL}/comics/?category_id=${category}`,
                config
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
                `${API_URL}/comics/?title=${object.title}&category_id=${object.category_id}`,
                config
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

const get_comics_company = createAsyncThunk(
    "get_comics_company",
    async ({ company_id }) => {
        try {
            let response = await axios.get(
                `http://localhost:8000/api/comics/profile/company?company_id=${company_id}`
            )
            return {
                response: { comic: response.data },
                message: "Comic/s Found",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comic: error.response.data },
                message: "Comic not found",
            }
        }
    }
)

const get_comics_from_cia = createAsyncThunk(
    "get_comics_from_cia",
    async ({ company_id, limit, category_id }) => {
        try {
            let response = await axios.get(
                `http://localhost:8000/api/comics/profile/company?company_id=${company_id}&limit=${limit}&category_id=${category_id}`
            )
            return {
                response: { comic: response.data },
                message: "Comic/s Found",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comic: error.response.data },
                message: "Comic not found",
            }
        }
    }
)

const get_comics_from_author = createAsyncThunk(
    "get_comics_from_author",
    async ({author_id}) => {
        try {
            let response = await axios.get(`http://localhost:8000/api/comics/profile/author?author_id${author_id}`)
            return {
                response: { comic: response.data.response },
                message: "Comic/s Found"
            }
        } catch (error) {
    console.log(error)
    return {
        response: { comic: error.response.data },
        message: 'Comic not found'
    }
}
    }
)

const comicActions = {
    createNewComic,
    getComic,
    getComics,
    getComicsByTitle,
    getComicsByCategory,
    getComicsByTitleAndCategory,
    get_comics_company,
    get_comics_from_cia,
    get_comics_from_author
}

export default comicActions
