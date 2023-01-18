import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios"

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

const setActiveCategory = createAction("setActiveCategory", (category) => {
    return {
        response: { activeCategory: category },
        payload: category,
    }
})

const categoryActions = {
    getCategories,
    setActiveCategory,
}

export default categoryActions
