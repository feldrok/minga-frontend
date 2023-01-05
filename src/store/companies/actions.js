import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const addCompany = createAsyncThunk("addCompany", async (company) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/companies",
      company
    );
    return {
      response: { company: response.data },
      message: "Company successfully created",
    }; 
  } catch (error) {
    return {
      response: { company: error.response.data },
      message: "Failed to create new company.",
    };
  }
});

const companyActions = {
  addCompany,
};

export default companyActions;
