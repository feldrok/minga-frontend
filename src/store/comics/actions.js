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

const comicActions = { createNewComic, get_comics_from_author }
export default comicActions