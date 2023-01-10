import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const getCategories = createAsyncThunk("getCategories", async () => {
    try {
        let response = await axios.get("http://localhost:8000/api/categories")
        return {
            response: { categories: response.data },
            message: "Categories obtained",
        }
    } catch (error) {
        return {
            response: { categories: error.response.data },
            message: "Error obtaining categories",
        }
    }
})

const categoryActions = {
    getCategories,
}

export default categoryActions