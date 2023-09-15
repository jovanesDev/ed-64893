import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    error:null,
    
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {}
});

export const {} = uiSlice.actions

export default uiSlice.reducer