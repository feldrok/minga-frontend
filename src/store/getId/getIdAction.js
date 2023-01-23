import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const getIdComic = createAsyncThunk( 
    "getIdComic",
    async (data) => {
        return {payload: data} 
    }
)


const getIdChapter = createAsyncThunk( 
    "getIdChapter",
    async (data) => {
        console.log(data)
        return {payload: data} 
    }
)

/* const getComicsById = createAsyncThunk("getComics", async (comic) => {
    try {
        let response = await axios.get(
            `${API_URL}/comics?/${comic}`,  
            handleToken() 
        ) 
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
 */

const getIdActions = {getIdComic, getIdChapter} 

export default getIdActions
