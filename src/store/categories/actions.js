import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const get_categories = createAsyncThunk(
    "get_categories", async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/categories`)
            return {
                response: { category: response.data },
                message: "Company found"
            }
        } catch (error) {
            return {
                response: { category: error.response.data },
                message: "Company not found",
            }
        }
    }
)

const categoryActions = {
    get_categories
}

export default categoryActions;