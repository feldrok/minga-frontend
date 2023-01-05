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

const comicActions = { createNewComic }
export default comicActions

