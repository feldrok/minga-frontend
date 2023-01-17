import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createNewComic = createAsyncThunk(
    "createNewComic",
    async (comic) => {
        try {
            let response = await axios.post('http://localhost:8000/api/comics', comic)
            console.log(response)
            return {
                response: { comic: response.data },
                message: "comic creado"
            }
        } catch (error) {
            console.log(error)
            return {
                response: { comic: error.response.data },
                message: 'Error al crear comic'
            }
        }
    }
)

const get_comics_company = createAsyncThunk(
    "get_comics_company",
    async ({company_id}) => {
        try {
            let response = await axios.get(`http://localhost:8000/api/comics/profile/company?company_id=${company_id}`)
            return {
                response: { comic: response.data },
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

const get_comics_from_cia = createAsyncThunk(
    "get_comics_from_cia",
    async ({company_id, limit, category_id}) => {
        try {
            let response = await axios.get(`http://localhost:8000/api/comics/profile/company?company_id=${company_id}&limit=${limit}&category_id=${category_id}`)
            return {
                response: { comic: response.data },
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

const comicActions = { createNewComic, get_comics_from_cia, get_comics_company}
export default comicActions

