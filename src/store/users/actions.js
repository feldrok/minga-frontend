import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"; // metodo para realizar acciones asincronas

const API_URL = process.env.REACT_APP_API_URL;

const handleToken = () => {
  const BEARER_TOKEN = localStorage.getItem("token");

  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };
  return config;
};

const getUser = createAsyncThunk("getUser", async (_id) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      params: { _id },
      ...handleToken(),
    });
    return {
      response: { user: response.data },
      message: "Loading users...",
    };
  } catch (error) {
    console.log(" ERROR", error);
    return {
      response: { user: error.response.data },
      message: "Failed to load comments!",
    };
  }
});

const getUsers = createAsyncThunk("getUsers", async () => {
    try {
        const response = await axios.get(`${API_URL}/auth`, handleToken());
        console.log(response)
        return {
          response: { users: response.data.response.all },
          message: "Loading users...",
        };
      } catch (error) {
        console.log(" ERROR", error);
        return {
          response: { users: error.response.data },
          message: "Failed to load comments!",
        };
      }
}) 

export { getUsers, getUser };
