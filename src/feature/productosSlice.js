import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productos:[]
}

const productosSlice = createSlice({
  name: "producto",
  initialState,
  reducers: {}
});

export const {} = productosSlice.actions

export default productosSlice.reducer