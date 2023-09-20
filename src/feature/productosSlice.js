import { createSlice } from '@reduxjs/toolkit'
import { getProductosResolver, postProductosResolver } from '../resolvers/productos.resolver';

const initialState = {
    loading:false,
    error:false,
    productos:[]
}

const productosSlice = createSlice({
  name: "producto",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(getProductosResolver.pending,(state) => {
      state.loading = true
    })
    builder.addCase(getProductosResolver.rejected,(state) => {
      state.loading = false
      state.error = true
    })
    builder.addCase(getProductosResolver.fulfilled,(state,action) => {
      state.loading = false
      state.error = false
      state.productos = action.payload
    })

    builder.addCase(postProductosResolver.pending,(state) => {
      state.loading = true
    })

    builder.addCase(postProductosResolver.rejected,(state) => {
      state.loading = false
      state.error = true
    })

    builder.addCase(postProductosResolver.fulfilled,(state,action) => {
      state.loading = false
      state.error = false
      state.productos = [...state.productos,action.payload]
      console.log(action.payload)
    })
  }
});

export const {} = productosSlice.actions

export default productosSlice.reducer