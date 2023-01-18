import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const addCompany = createAsyncThunk("addCompany", async (company) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/companies",
      company
    )
    return {
      response: { company: response.data },
      message: "Company successfully created",
    }
  } catch (error) {
    return {
      response: { company: error.response.data },
      message: "Failed to create new company.",
    }
  }
})

const get_company = createAsyncThunk(
  "get_company", async (id) => {
    try{
      const response = await axios.get(`http://localhost:8000/api/company/${id}`)
      return{
        response: { companies: response.data },
        message: "Company found"
      }
    }catch (error) {
      return {
        response: { company: error.response.data },
        message: "Company not found",
      }
  }
}
)

const companyActions = {
  addCompany, get_company
}

export default companyActions;
