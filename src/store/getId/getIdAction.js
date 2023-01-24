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

const reloadChapter = createAsyncThunk( 
    "reloadChapter",
    async (data) => {
        console.log(data)
        return {payload: data} 
    }
)  

const getIdActions = {getIdComic, getIdChapter, reloadChapter}   

export default getIdActions
