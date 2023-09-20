import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../axios/axios.client";


export const getProductosResolver = createAsyncThunk(
    "productos/get",
    async () => {
        try {
            const response = await axiosClient.get("/productos")
            return response.data // 
        } catch (error) {
          throw Error(error)
        }
    }
)

export const postProductosResolver = createAsyncThunk(
    "productos/post",
    async (producto) => {
        try {
            const response = await axiosClient.post("/productos",producto)
            return response.data
        } catch (error) {
            throw Error(error)
        }
    }
)