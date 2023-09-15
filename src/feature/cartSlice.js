import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carrito:[],
    total:0
}

const cartSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {}
});

export const {} = cartSlice.actions

export default cartSlice.reducer